import {
    Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, ViewChildren, QueryList,
} from "@angular/core";
import { Message } from "./Message";
import { MessageStatus } from "./MessageStatus";
import { MessageReactions } from "./MessageReactions";
import { AttachmentButton } from "./AttachmentButton";
import { User } from "./User";

@Component({
    selector: "squirrel-chat-ui",
    templateUrl: "./squirrel-chat-ui.component.html",
    styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
    @ViewChild("scrollMe", { static: true }) private messagesContainer: ElementRef;
    @ViewChild("messageInput", { static: true }) private messageInput: ElementRef;
    @ViewChildren("messagesList") private messagesList: QueryList<ElementRef>;
    public message = "";
    public oldMessage = ""; // save the original message when editing
    public showEmojiPicker = false;
    public reactions = MessageReactions;
    public showAttachmentsCard = false;
    public showMenuDropDown = false;
    public attachmentButtonRows: (AttachmentButton[])[] = [];
    public attachmentLoading: string = undefined;
    public citeMessageIdx: number;
    private disableScrollDown = false;
    @Input() public messages: Message[] = [];
    @Input() public menuItems: string[] = [];
    @Input() public profileImageSource = "";
    @Input() public title = "";
    @Input() public subtitle = "";
    @Input() public me: User = undefined;
    @Input() public i18n: { edit: string; discardDraft: string, edited: string, cite: string } = {
        edit: "Edit", discardDraft: "Do you really want to discard your draft?", edited: "Bearbeitet", cite: "Zitieren",
    };
    @Input() public emojiMartOptions: {
        i18n: any, enableSearch: boolean, showPreview: boolean, title: string, emoji: string,
    } = {
        i18n: undefined,
        enableSearch: false,
        showPreview: false,
        title: "Pick an emoji",
        emoji: "grinning",
    };
    get attachmentButtons(): AttachmentButton[] {
        return ([] as AttachmentButton[]).concat(...this.attachmentButtonRows);
    }
    @Input()
    set attachmentButtons(buttons: AttachmentButton[]) {
        const half = Math.floor(buttons.length / 2);
        this.attachmentButtonRows = [
            buttons.slice(0, half),
            buttons.slice(half, buttons.length),
        ];
    }
    @Output() videoCallClicked = new EventEmitter<void>();
    @Output() audioCallClicked = new EventEmitter<void>();
    @Output() menuItemClicked = new EventEmitter<string>();
    @Output() messageSent = new EventEmitter<Message>();
    @Output() messageEdited = new EventEmitter<Message>();
    @Output() attachmentClicked = new EventEmitter<{id: string, setUrl:(url: string) => void}>();
    @Output() reaction = new EventEmitter<
        { message: Message, user: User, reaction: string, reacted: boolean }
    >();

    constructor() {
        this.scrollToBottom();
    }

    public ngOnInit(): void {
        this.scrollToBottom();
    }

    public getTrimmedMessage(): string {
        return this.message.trim();
    }

    public toggleEmojiPicker(): void {
        this.showEmojiPicker = !this.showEmojiPicker;
        this.showAttachmentsCard = false;
    }
    public toggleAttachmentsCard(): void {
        this.showAttachmentsCard = !this.showAttachmentsCard;
        this.showEmojiPicker = false;
    }

    public emojiSelected({ emoji }: {emoji: any}): void {
        this.message += emoji.native;
        this.showEmojiPicker = false;
    }

    public ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    public onScroll(): void {
        const element = this.messagesContainer.nativeElement;
        const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        } else {
            this.disableScrollDown = true;
        }
    }

    private scrollToBottom(ignoreDisabled = false): void {
        if (this.disableScrollDown && !ignoreDisabled) {
            return;
        }
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer
                .nativeElement.scrollHeight;
        } catch (err) {
            //
        }
    }

    public getStatusIconClass(message: Message): string {
        return `fas fa-${message.status == MessageStatus.Seen ? "check-double text-primary" : message.status == MessageStatus.Delivered ? "check-double" : message.status == MessageStatus.Sent ? "check" : message.status == MessageStatus.Waiting ? "clock" : ""}`;
    }

    public isContinuing(message: Message): boolean {
        const index = this.messages.indexOf(message);
        return this.messages[index]
            && this.messages[index - 1]
            && this.messages[index].sender == this.messages[index - 1].sender;
    }

    public sendMessage(): void {
        const newMessage: Message = {
            citation: this.citeMessageIdx ? this.messages[this.citeMessageIdx].id : undefined,
            date: new Date(),
            fromMe: true,
            text: this.message,
            sender: this.me,
            id: undefined,
            status: MessageStatus.Waiting,
        };
        this.messages.push(newMessage);
        this.messageSent.emit(newMessage);
        setTimeout(() => {
            this.scrollToBottom(true);
        });
        this.message = "";
        this.messageInput.nativeElement.focus();
        this.citeMessageIdx = undefined;
    }

    public attach(attachmentButton: AttachmentButton): void {
        if (attachmentButton.loadingIndicatorText) {
            this.attachmentLoading = attachmentButton.loadingIndicatorText;
        } else {
            this.showAttachmentsCard = false;
        }
        if (attachmentButton.isEmojiButton) {
            this.showEmojiPicker = true;
            return;
        }
        this.attachmentClicked.emit({
            id: attachmentButton.id,
            setUrl: (url: string) => {
                this.attachmentLoading = undefined;
                this.showAttachmentsCard = false;
                // eslint-disable-next-line no-alert
                alert(`Got a response: "${url}"`);
            },
        });
    }

    public react(messageIdx: number, reaction: string): void {
        if (!this.messages[messageIdx].reactions) {
            this.messages[messageIdx].reactions = {};
        }
        if (!(this.messages[messageIdx].reactions[reaction]
            && this.messages[messageIdx].reactions[reaction].length > 0)) {
            this.messages[messageIdx].reactions[reaction] = [];
        }
        const existingIdx = this.messages[messageIdx].reactions[reaction]
            .findIndex((u) => u.id == this.me.id);
        let reacted = true;
        if (existingIdx > -1) {
            this.messages[messageIdx].reactions[reaction].splice(existingIdx, 1);
            reacted = false;
        } else {
            this.messages[messageIdx].reactions[reaction].push(this.me);
        }
        this.reaction.emit({
            message: this.messages[messageIdx],
            reaction,
            reacted,
            user: this.me,
        });
    }

    public editMessage(idx: number): void {
        for (const m of this.messages) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (m.editing) {
                // eslint-disable-next-line
                if (confirm(this.i18n.discardDraft)) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    m.editing = false;
                } else {
                    return;
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.messages[idx].showDropDown = false;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.messages[idx].editing = true;
        let { width, height } = (this.messagesList.toArray()[idx].nativeElement as HTMLElement).querySelector(".scu-message-content").getBoundingClientRect();
        if (!width || width < 200) {
            width = 200;
        }
        if (!height || height < 40) {
            height = 40;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.messages[idx].editingSizes = { width, height };
        this.oldMessage = this.messages[idx].text;
    }

    public finishEditing(idx: number, save: boolean): void {
        if (save) {
            this.messageEdited.emit(this.messages[idx]);
            this.messages[idx].edited = true;
        } else {
            this.messages[idx].text = this.oldMessage;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.messages[idx].editing = false;
    }
    public citeMessage(idx: number): void {
        this.citeMessageIdx = idx;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.messages[idx].showDropDown = false;
        this.messageInput.nativeElement.focus();
    }
    public goToMessage(id: number): void {
        const message = document.getElementById(`message-${id}`);
        if (message) {
            message.scrollIntoView({ behavior: "smooth" });
        }
    }
}

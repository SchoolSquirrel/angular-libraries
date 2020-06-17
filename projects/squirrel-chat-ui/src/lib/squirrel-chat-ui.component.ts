import {
    Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter,
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
    public message = "";
    public showEmojiPicker = false;
    public reactions = Object.values(MessageReactions);
    public showAttachmentsCard = false;
    public showMenuDropDown = false;
    public attachmentButtonRows: (AttachmentButton[])[] = [];
    public attachmentLoading: string = undefined;
    private disableScrollDown = false;
    @Input() public messages: Message[] = [];
    @Input() public menuItems: string[] = [];
    @Input() public profileImageSource = "";
    @Input() public title = "";
    @Input() public subtitle = "";
    @Input() public me: User = undefined;
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
    @Output() attachmentClicked = new EventEmitter<{id: string, setUrl:(url: string) => void}>();

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
}

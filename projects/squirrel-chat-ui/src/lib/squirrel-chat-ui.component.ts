import {
    Component, OnInit, ViewChild, ElementRef, Input,
} from "@angular/core";
import { Message } from "./Message";
import { MessageStatus } from "./MessageStatus";
import { MessageReactions } from "./MessageReactions";

@Component({
    selector: "squirrel-chat-ui",
    templateUrl: "./squirrel-chat-ui.component.html",
    styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
    @ViewChild("scrollMe", { static: true }) private messagesContainer: ElementRef;
    public message = "";
    public showEmojiPicker = false;
    public reactions = Object.values(MessageReactions);
    public showAttachmentsCard = false;
    private disableScrollDown = false;
    @Input() public messages: Message[] = [];

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

    private scrollToBottom(): void {
        if (this.disableScrollDown) {
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
}

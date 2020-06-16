import {
    Component, OnInit, ViewChild, ElementRef,
} from "@angular/core";
import { Message } from "./Message";
import { MessageStatus } from "./MessageStatus";

@Component({
    selector: "squirrel-chat-ui",
    templateUrl: "./squirrel-chat-ui.component.html",
    styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
    @ViewChild("scrollMe", { static: true }) private messagesContainer: ElementRef;
    public message = "";
    public showEmojiPicker = false;
    public showAttachmentsCard = false;
    private user1 = { id: 1, name: "Güther" };
    private user2 = { id: 2, name: "Tom" };
    private disableScrollDown = false;
    public messages: Message[] = [
        {
            id: 0,
            fromMe: false,
            text: "Hallo!",
            sender: this.user1,
        },
        {
            id: 1,
            fromMe: true,
            text: "Hallo!",
            sender: this.user2,
        },
        {
            id: 2,
            fromMe: false,
            text: "Wie geht's?",
            sender: this.user1,
        },
        {
            id: 3,
            fromMe: false,
            text: "Hallo",
            sender: this.user1,
        },
        {
            id: 4,
            fromMe: false,
            text: "...",
            sender: this.user1,
        },
        {
            id: 5,
            fromMe: true,
            text: "Gut",
            sender: this.user2,
        },
        {
            id: 6,
            fromMe: false,
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            sender: this.user1,
        },
        {
            id: 7,
            fromMe: true,
            text: "Seen",
            sender: this.user2,
            status: MessageStatus.Seen,
        },
        {
            id: 8,
            fromMe: true,
            text: "Delivered",
            sender: this.user2,
            status: MessageStatus.Delivered,
        },
        {
            id: 9,
            fromMe: true,
            text: "Sent",
            sender: this.user2,
            status: MessageStatus.Sent,
        },
        {
            id: 10,
            fromMe: true,
            text: "Waiting. Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines?",
            sender: this.user2,
            status: MessageStatus.Waiting,
        },
    ];
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

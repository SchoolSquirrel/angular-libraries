import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from './Message';

@Component({
    selector: 'squirrel-chat-ui',
    templateUrl: "./squirrel-chat-ui.component.html",
    styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
    @ViewChild("scrollMe", {static: true}) private messagesContainer: ElementRef;
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
            id: 0,
            fromMe: false,
            text: "Wie geht's?",
            sender: this.user1,
        },
        {
            id: 0,
            fromMe: false,
            text: "Hallo",
            sender: this.user1,
        },
        {
            id: 0,
            fromMe: false,
            text: "...",
            sender: this.user1,
        },
        {
            id: 1,
            fromMe: true,
            text: "Gut",
            sender: this.user2,
        },
        {
            id: 0,
            fromMe: false,
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            sender: this.user1,
        },
    ];
    constructor() {
        this.scrollToBottom();
    }

    public ngOnInit(): void {
        this.scrollToBottom();
    }

    public getTrimmedMessage() {
        return this.message.trim();
    }

    public toggleEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
        this.showAttachmentsCard = false;
    }
    public toggleAttachmentsCard() {
        this.showAttachmentsCard = !this.showAttachmentsCard;
        this.showEmojiPicker = false;
    }

    public emojiSelected({ emoji }) {
        this.message += emoji.native;
        this.showEmojiPicker = false;
    }

    public ngAfterViewChecked() {
        this.scrollToBottom();
    }

    public onScroll() {
        let element = this.messagesContainer.nativeElement
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false
        } else {
            this.disableScrollDown = true
        }
    }


    private scrollToBottom(): void {
        if (this.disableScrollDown) {
            return;
        }
        try {
            this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        } catch(err) { }
    }
}

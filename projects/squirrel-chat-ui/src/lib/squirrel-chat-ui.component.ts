import { Component, OnInit } from '@angular/core';
import { Message } from './Message';

@Component({
    selector: 'squirrel-chat-ui',
    templateUrl: "./squirrel-chat-ui.component.html",
    styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
    public message = "";
    public showEmojiPicker = false;
    public showAttachmentsCard = false;
    private user1 = { id: 1, name: "Güther" };
    private user2 = { id: 2, name: "Tom" };
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
    }

    ngOnInit(): void {
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

}

/* eslint-disable no-alert */
import { Component } from "@angular/core";
import {
    Message, MessageStatus, AttachmentButton, User,
} from "squirrel-chat-ui";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    public me: User = { id: 2, name: "Tom" };
    private otherUser: User = { id: 1, name: "Güther" };
    public attachmentButtons: AttachmentButton[] = [
        {
            icon: "fas fa-upload",
            name: "Hochladen",
            id: "upload",
            loadingIndicatorText: "Uploading file...",
        },
        {
            icon: "fas fa-folder-open",
            name: "Auswählen",
            id: "choose",
        },
        {
            icon: "fas fa-smile",
            name: "Emoji",
            id: "emoji",
            isEmojiButton: true,
        },
        {
            icon: "fas fa-map-marker-alt",
            name: "Standort",
            id: "location",
            loadingIndicatorText: "Finding your location...",
        },
        {
            icon: "fas fa-video",
            name: "Video",
            id: "video",
            loadingIndicatorText: "Filming video...",
        },
        {
            icon: "fas fa-microphone",
            name: "Audio",
            id: "audio",
            loadingIndicatorText: "Recording audio...",
        },
    ]
    public messages: Message[] = [
        {
            id: 0,
            fromMe: false,
            text: "Hallo!",
            sender: this.otherUser,
            date: new Date("2020-06-15 13:57"),
        },
        {
            id: 1,
            fromMe: true,
            text: "Hallo!",
            sender: this.me,
            date: new Date("2020-06-15 13:58"),
        },
        {
            id: 2,
            fromMe: false,
            text: "Wie geht's?",
            sender: this.otherUser,
            date: new Date("2020-06-15 13:59"),
        },
        {
            id: 3,
            fromMe: false,
            text: "Hallo",
            sender: this.otherUser,
            date: new Date("2020-06-16 08:26"),
        },
        {
            id: 4,
            fromMe: false,
            text: "...",
            sender: this.otherUser,
            date: new Date("2020-06-16 08:34"),
        },
        {
            id: 5,
            fromMe: true,
            text: "Gut",
            sender: this.me,
            date: new Date("2020-06-16 10:05"),
        },
        {
            id: 6,
            fromMe: false,
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            sender: this.otherUser,
            date: new Date("2020-06-16 10:50"),
        },
        {
            id: 7,
            fromMe: true,
            text: "Seen",
            sender: this.me,
            status: MessageStatus.Seen,
            date: new Date("2020-06-16 10:55"),
        },
        {
            id: 8,
            fromMe: true,
            text: "Delivered",
            sender: this.me,
            status: MessageStatus.Delivered,
            date: new Date("2020-06-16 10:55"),
        },
        {
            id: 9,
            fromMe: true,
            text: "Sent",
            sender: this.me,
            status: MessageStatus.Sent,
            date: new Date("2020-06-16 10:55"),
        },
        {
            id: 10,
            fromMe: true,
            text: "Waiting. Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines? Also a very long message... Maybe multiple lines?",
            sender: this.me,
            status: MessageStatus.Waiting,
            date: new Date("2020-06-16 10:59"),
        },
    ];

    public menuItems: string[] = [
        "Chat blockieren",
        "Email schreiben",
        "...",
    ]

    public onAudioCallClicked(): void {
        alert("Audio call clicked!");
    }

    public onVideoCallClicked(): void {
        alert("Video call clicked!");
    }
    public onMenuItemClicked(item: string): void {
        alert(`Menu item: "${item}"`);
    }
    public onMessageSent(message: Message): void {
        // fake a sending delay
        setTimeout(() => {
            this.messages[this.messages.indexOf(message)].status = MessageStatus.Sent;
            setTimeout(() => {
                this.messages[this.messages.indexOf(message)].status = MessageStatus.Delivered;
                setTimeout(() => {
                    this.messages[this.messages.indexOf(message)].status = MessageStatus.Seen;
                }, 2000);
            }, 2000);
        }, 2000);
    }
    public onAttachmentClicked({ id, setUrl }: {id: string, setUrl: (url: string) => void}): void {
        if (id == "choose") {
            setTimeout(() => {
                setUrl("https://placeakitten.com/300/100");
            }, 2000);
        } else {
            setTimeout(() => {
                setUrl("Some data");
            }, 2000);
        }
    }
}

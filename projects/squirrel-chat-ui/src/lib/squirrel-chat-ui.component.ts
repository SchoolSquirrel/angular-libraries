import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-chat-ui',
  templateUrl: "./squirrel-chat-ui.component.html",
  styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
  public message = "";
  public showEmojiPicker = false;
  public showAttachmentsCard  = false;
  constructor() {
   }

  ngOnInit(): void {
  }

  public getTrimmedMessage() {
    return this.message.trim();
  }

  public toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }
  public toggleAttachmentsCard() {
    this.showAttachmentsCard = !this.showAttachmentsCard;
  }

  public emojiSelected({emoji}) {
    this.message += emoji.native;
    this.showEmojiPicker = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-chat-ui',
  templateUrl: "./squirrel-chat-ui.component.html",
  styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
  public message = "";
  public showEmojiPicker = false;
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

  public emojiSelected({emoji}) {
    this.message += emoji.native;
    this.showEmojiPicker = false;
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'squirrel-chat-ui',
  templateUrl: "./squirrel-chat-ui.component.html",
  styleUrls: ["./squirrel-chat-ui.component.scss"],
})
export class SquirrelChatUiComponent implements OnInit {
  public message = "";
  constructor() {
   }

  ngOnInit(): void {
  }

  public getTrimmedMessage() {
    console.log(this.message);
    console.log(this.message.trim());
    return this.message.trim();
  }

}

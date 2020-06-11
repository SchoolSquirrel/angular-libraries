import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SquirrelChatUiComponent } from './squirrel-chat-ui.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [SquirrelChatUiComponent],
  imports: [
    FormsModule,
    PickerModule,
    BrowserModule,
  ],
  exports: [SquirrelChatUiComponent]
})
export class SquirrelChatUiModule { }

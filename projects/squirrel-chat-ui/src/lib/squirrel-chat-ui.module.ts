import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SquirrelChatUiComponent } from './squirrel-chat-ui.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';



@NgModule({
  declarations: [SquirrelChatUiComponent],
  imports: [
    FormsModule,
    PickerModule,
  ],
  exports: [SquirrelChatUiComponent]
})
export class SquirrelChatUiModule { }

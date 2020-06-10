import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SquirrelChatUiComponent } from './squirrel-chat-ui.component';



@NgModule({
  declarations: [SquirrelChatUiComponent],
  imports: [
    FormsModule
  ],
  exports: [SquirrelChatUiComponent]
})
export class SquirrelChatUiModule { }

import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { BrowserModule } from "@angular/platform-browser";
import { EmojiModule } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { SquirrelChatUiComponent } from "./squirrel-chat-ui.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    declarations: [SquirrelChatUiComponent, FilterPipe],
    imports: [
        FormsModule,
        PickerModule,
        EmojiModule,
        BrowserModule,
    ],
    exports: [SquirrelChatUiComponent],
})
export class SquirrelChatUiModule { }

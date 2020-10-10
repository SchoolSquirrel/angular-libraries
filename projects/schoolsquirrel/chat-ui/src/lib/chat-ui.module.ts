import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PickerModule } from "@ctrl/ngx-emoji-mart";
import { BrowserModule } from "@angular/platform-browser";
import { EmojiModule } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { Utf8EmojisToImagesModule } from "ng-utf8-emojis-to-images";
import { ChatUiComponent } from "./chat-ui.component";
import { FilterPipe } from "./filter.pipe";

@NgModule({
    declarations: [ChatUiComponent, FilterPipe],
    imports: [
        FormsModule,
        PickerModule,
        EmojiModule,
        Utf8EmojisToImagesModule,
        BrowserModule,
    ],
    exports: [ChatUiComponent],
})
export class ChatUiModule { }

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { SquirrelChatUiModule } from "@schoolsquirrel/squirrel-chat-ui";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SquirrelChatUiModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

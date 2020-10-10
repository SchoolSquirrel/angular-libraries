import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// used for the demo
import { SquirrelChatUiModule } from "@schoolsquirrel/chat-ui";

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

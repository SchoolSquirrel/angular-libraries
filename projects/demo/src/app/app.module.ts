import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// used for the demo
import { ChatUiModule } from "@schoolsquirrel/chat-ui";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        ChatUiModule,
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

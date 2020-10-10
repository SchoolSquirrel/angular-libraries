import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ChatUiModule } from "@schoolsquirrel/chat-ui";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ChatUiDemoComponent } from "./_components/chat-ui-demo/chat-ui-demo.component";
import { FormsDemoComponent } from "./_components/forms-demo/forms-demo.component";
import { IndexComponent } from "./_components/index/index.component";

@NgModule({
    declarations: [
        AppComponent,
        ChatUiDemoComponent,
        FormsDemoComponent,
        IndexComponent,
    ],
    imports: [
        ChatUiModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: "chat-ui", component: ChatUiDemoComponent },
            { path: "forms", component: FormsDemoComponent },
            { path: "", component: IndexComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

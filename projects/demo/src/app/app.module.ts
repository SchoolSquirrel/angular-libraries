import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { SchoolSquirrelFormsModule } from "@schoolsquirrel/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChatUiModule } from "../../../schoolsquirrel/chat-ui/src/public-api";
import { SchoolSquirrelFormsModule } from "../../../schoolsquirrel/forms/src/public-api";
import { FileManagerModule } from "../../../schoolsquirrel/filemanager/src/public-api";
import { AppComponent } from "./app.component";
import { ChatUiDemoComponent } from "./_components/chat-ui-demo/chat-ui-demo.component";
import { FormsDemoComponent } from "./_components/forms-demo/forms-demo.component";
import { FileManagerDemoComponent } from "./_components/file-manager-demo/file-manager-demo.component";
import { IndexComponent } from "./_components/index/index.component";

@NgModule({
    declarations: [
        AppComponent,
        ChatUiDemoComponent,
        FormsDemoComponent,
        IndexComponent,
        FileManagerDemoComponent,
    ],
    imports: [
        BrowserModule,
        ChatUiModule,
        ReactiveFormsModule,
        FormsModule,
        FileManagerModule,
        SchoolSquirrelFormsModule,
        RouterModule.forRoot([
            { path: "chat-ui", component: ChatUiDemoComponent },
            { path: "forms", component: FormsDemoComponent },
            { path: "filemanager", component: FileManagerDemoComponent },
            { path: "", component: IndexComponent },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }

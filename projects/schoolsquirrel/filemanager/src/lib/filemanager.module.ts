import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FileManagerComponent } from "./filemanager.component";
import { FileExtensionPipe } from "./file-extension.pipe";

@NgModule({
    declarations: [FileManagerComponent, FileExtensionPipe],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    exports: [FileManagerComponent],
})
export class FileManagerModule { }

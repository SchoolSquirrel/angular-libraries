import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FileManagerComponent } from "./filemanager.component";

@NgModule({
    declarations: [FileManagerComponent],
    imports: [
        BrowserModule,
    ],
    exports: [FileManagerComponent],
})
export class FileManagerModule { }

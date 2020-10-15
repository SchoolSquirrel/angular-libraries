import { Component } from "@angular/core";
import { Folder } from "../../../../../schoolsquirrel/filemanager/src/lib/Folder";
import { File } from "../../../../../schoolsquirrel/filemanager/src/lib/File";

@Component({
    selector: "app-file-manager-demo",
    templateUrl: "./file-manager-demo.component.html",
    styleUrls: ["./file-manager-demo.component.scss"],
})
export class FileManagerDemoComponent {
    public items: (File | Folder)[] = [
        {
            name: "CVs",
            files: [],
            isFolder: true,
        },
        {
            name: "Assignments",
            files: [],
            isFolder: true,
        },
        {
            name: "Pictures",
            files: [],
            isFolder: true,
        },
        {
            name: "README.docx",
        },
        {
            name: "Infos.pptx",
        },
        {
            name: "Logo.psd",
        },
    ];
}

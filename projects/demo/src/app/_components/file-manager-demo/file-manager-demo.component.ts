import { Component } from "@angular/core";
import { File } from "../../../../../schoolsquirrel/filemanager/src/lib/File";

@Component({
    selector: "app-file-manager-demo",
    templateUrl: "./file-manager-demo.component.html",
    styleUrls: ["./file-manager-demo.component.scss"],
})
export class FileManagerDemoComponent {
    public files: File[] = [
        {
            path: "CVs",
            isFolder: true,
        },
        {
            path: "Pictures/Holidays/Winter/cool.png",
        },
        {
            path: "Spreadsheets/Calculations/Prices.xlsx",
        },
        {
            path: "README.docx",
        },
        {
            path: "Infos.pptx",
        },
        {
            path: "Logo.psd",
        },
    ];

    public openFile(file: File): void {
        // eslint-disable-next-line no-alert
        alert(`${file._name} was opened!`);
    }
}

import {
    Component, Input,
} from "@angular/core";
import { File } from "./File";

@Component({
    selector: "filemanager",
    templateUrl: "./filemanager.component.html",
    host: {
        class: "d-block",
    },
    styleUrls: ["./filemanager.component.scss"],
})
export class FileManagerComponent {
    @Input() public files: File[];
    public currentFiles: File[] = [];
    public currentPath: string[] = [];

    public ngOnInit(): void {
        for (const file of this.files) {
            if (this.currentPath.length > 0) {
                //
            } else {
                const parts = file.path.split("/");
                const topLevelName = parts.shift();
                if (this.currentFiles.findIndex((f) => f._name == topLevelName) === -1) {
                    this.currentFiles.push({
                        _name: topLevelName,
                        path: file.path,
                        isFolder: file.isFolder || parts.length > 0,
                    });
                }
            }
        }
    }

    public selectFile(event: Event, file: File): void {
        if (!(event as any).ctrlKey && (event.target as HTMLElement).nodeName !== "LABEL") {
            for (const f of this.currentFiles) {
                f._selected = false;
            }
        }
        event.preventDefault();
        event.stopPropagation();
        file._selected = !file._selected;
    }
}

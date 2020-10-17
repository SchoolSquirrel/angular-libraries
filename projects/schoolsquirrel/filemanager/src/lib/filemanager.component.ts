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
        this.updateCurrentFiles();
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

    public open(file: File): void {
        if (file.isFolder) {
            this.currentPath.push(file._name);
            this.updateCurrentFiles();
        } else {
            // eslint-disable-next-line no-alert
            alert(file._name);
        }
    }

    private updateCurrentFiles() {
        this.currentFiles = [];
        const currentPath = this.currentPath.join("/");
        const files = this.currentPath.length > 0
            ? this.files.filter((f) => f.path.startsWith(currentPath))
            : this.files;
        for (const file of files) {
            const parts = file.path.split("/").slice(this.currentPath.length);
            if (parts?.length) {
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
}

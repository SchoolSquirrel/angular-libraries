import {
    Component, EventEmitter, Input, Output,
} from "@angular/core";
import { File } from "./File";

@Component({
    selector: "filemanager",
    templateUrl: "./filemanager.component.html",
    host: {
        class: "d-block h-100",
    },
    styleUrls: ["./filemanager.component.scss"],
})
export class FileManagerComponent {
    @Input() public files: File[];
    @Input() public rootFolderName = "Files";
    @Output() public openFile: EventEmitter<File> = new EventEmitter<File>();
    public currentFiles: File[] = [];
    public currentPath: string[] = [];
    public dropdownOpen: string;

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
            this.openFile.emit(file);
        }
    }

    public goToPathIndex(event: Event, index: number): void {
        event.preventDefault();
        event.stopPropagation();
        if (index === -1) {
            this.currentPath = [];
        } else if (index == this.currentPath.length - 1) {
            return;
        }
        this.currentPath = this.currentPath.slice(0, index + 1);
        this.updateCurrentFiles();
    }

    public openDropdown(event: Event, type: string): void {
        this.dropdownOpen = this.dropdownOpen == type ? undefined : type;
        event.preventDefault();
        event.stopPropagation();
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

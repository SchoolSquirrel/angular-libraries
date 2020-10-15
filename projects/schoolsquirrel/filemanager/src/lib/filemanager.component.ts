import {
    Component, Input,
} from "@angular/core";
import { File } from "./File";
import { Folder } from "./Folder";

@Component({
    selector: "filemanager",
    templateUrl: "./filemanager.component.html",
    host: {
        class: "d-block",
    },
    styleUrls: ["./filemanager.component.scss"],
})
export class FileManagerComponent {
    @Input() public items: (File | Folder)[];
}

import { User } from "./User";

export class File {
    path: string;
    isFolder?: boolean;
    created?: Date;
    modified?: Date;
    createdBy?: User;
    modifiedBy?: User;
    _name?: string;
}

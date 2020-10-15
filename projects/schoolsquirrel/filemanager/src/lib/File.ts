import { User } from "./User";

export class File {
    name: string;

    created?: Date;
    modified?: Date;
    createdBy?: User;
    modifiedBy?: User;
}

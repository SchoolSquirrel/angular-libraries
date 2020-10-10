import { Field } from "./Field";

export class Form {
    name: string;
    author: {
        name: string;
    };
    date?: Date;
    description?: string;
    fields: Field[];
}

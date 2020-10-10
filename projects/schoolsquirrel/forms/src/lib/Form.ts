import { Field } from "./Field";

export class Form {
    name: string;
    author: {
        name: string;
    };
    fields: Field[];
}

type FieldBase = {
    name: string;
    id: string;
    description?: string;
    placeholder?: string;
    value?: string;
    required?: boolean;
    readonly?: boolean;
    answer?: string;
}

type Option = {
    name: string;
    value: string;
};

type Options = Option[];

export type Field =
    FieldBase & {
        type: "text";
        maxLength?: number;
        minLength?: number;
    } |
    FieldBase & {
        type: "number";
        min?: number;
        max?: number;
    } |
    FieldBase & {
        type: "date";
    } |
    FieldBase & {
        type: "textarea";
        maxLength?: number;
        minLength?: number;
    } |
    FieldBase & {
        type: "select";
        options: Options;
    } |
    FieldBase & {
        type: "check";
        options: Options;
    } |
    FieldBase & {
        type: "radio";
        options: Options;
    }

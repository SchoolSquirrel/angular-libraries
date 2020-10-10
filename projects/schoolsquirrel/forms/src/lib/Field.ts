type FieldBase = {
    name: string;
    value?: string;
    required?: boolean;
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
        maxlength?: number;
    } |
    FieldBase & {
        type: "number";
        min?: number;
        max?: number;
    } |
    FieldBase & {
        type: "textarea";
        maxlength?: number;
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

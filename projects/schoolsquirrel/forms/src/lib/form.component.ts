import { Component, Input } from "@angular/core";
import { Field } from "./Field";
import { Form } from "./Form";

@Component({
    selector: "schoolsquirrel-form",
    templateUrl: "./form.component.html",
    host: {
        class: "d-block",
    },
})
export class FormComponent {
    @Input() public form: Form = {} as Form;

    public isInputTag(field: Field): boolean {
        return ["number", "text", "date"].includes(field.type);
    }

    public isTextareaTag(field: Field): boolean {
        return field.type == "textarea";
    }
}

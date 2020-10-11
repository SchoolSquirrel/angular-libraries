import { Component, Input } from "@angular/core";
import {
    AbstractControl, FormControl, FormGroup, Validators,
} from "@angular/forms";
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
    public f: FormGroup;

    public ngOnInit(): void {
        const fields: { [key: string]: AbstractControl; } = {};
        for (const field of this.form.fields) {
            fields[field.id] = new FormControl(field.value,
                field.required ? [Validators.required] : []);
        }
        this.f = new FormGroup(fields);
    }

    public isInputTag(field: Field): boolean {
        return ["number", "text", "date"].includes(field.type);
    }

    public isTextareaTag(field: Field): boolean {
        return field.type == "textarea";
    }
}

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
            const validators = [];
            if (field.required) {
                validators.push(Validators.required);
            }
            if ((field as any).min) {
                validators.push(Validators.min((field as any).min));
            }
            if ((field as any).max) {
                validators.push(Validators.max((field as any).max));
            }
            if ((field as any).minLength) {
                validators.push(Validators.minLength((field as any).minLength));
            }
            if ((field as any).maxLength) {
                validators.push(Validators.maxLength((field as any).maxLength));
            }
            if ((field as any).requiredTrue) {
                validators.push(Validators.requiredTrue);
            }
            fields[field.id] = new FormControl(field.value, validators);
        }
        this.f = new FormGroup(fields);
    }

    public isInputTag(field: Field): boolean {
        return ["number", "text", "date"].includes(field.type);
    }

    public isTextareaTag(field: Field): boolean {
        return field.type == "textarea";
    }

    public isCheckbox(field: Field): boolean {
        return field.type == "check";
    }

    public isRadio(field: Field): boolean {
        return field.type == "radio";
    }
}

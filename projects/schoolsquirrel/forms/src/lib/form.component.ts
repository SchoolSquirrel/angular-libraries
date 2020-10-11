import {
    Component, EventEmitter, Input, Output,
} from "@angular/core";
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
    styleUrls: ["./form.component.scss"],
})
export class FormComponent {
    @Input() public form: Form = {} as Form;
    @Input() public editMode = false;
    @Output() public formSubmitted: EventEmitter<Form> = new EventEmitter<Form>();
    @Output() public formChanged: EventEmitter<Form> = new EventEmitter<Form>();
    public f: FormGroup;
    public submitted = false;

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

    public isSelectbox(field: Field): boolean {
        return field.type == "select";
    }

    public supportsPlaceholder(field: Field): boolean {
        return this.isInputTag(field) || this.isTextareaTag(field);
    }

    public duplicateField(field: Field): void {
        this.form.fields.splice(this.form.fields.indexOf(field), 0, field);
    }

    public moveField(field: Field, delta: number): void {
        const index = this.form.fields.indexOf(field);
        const newIndex = index + delta;
        if (newIndex < 0 || newIndex == this.form.fields.length) return;
        const indexes = [index, newIndex].sort();
        this.form.fields.splice(
            indexes[0],
            2,
            this.form.fields[indexes[1]],
            this.form.fields[indexes[0]],
        );
    }

    public removeField(field: Field): void {
        // eslint-disable-next-line
        if (confirm("Do you really want to remove this field")) {
            this.form.fields.splice(this.form.fields.indexOf(field), 1);
        }
    }

    public onSubmit(): void {
        this.submitted = true;
        if (this.f.invalid) {
            return;
        }
        for (const field of this.form.fields) {
            field.value = this.f.controls[field.id].value;
        }
        this.formSubmitted.emit(this.form);
    }

    public saveChanges(): void {
        if (!this.editMode) {
            return;
        }
        this.formChanged.emit(this.form);
    }
}

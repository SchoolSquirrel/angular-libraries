import { Component, Input } from "@angular/core";
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
}

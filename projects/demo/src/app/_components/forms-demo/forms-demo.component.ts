import { Component } from "@angular/core";
import { Form } from "../../../../../schoolsquirrel/forms/src/public-api";

@Component({
    selector: "app-forms-demo",
    templateUrl: "./forms-demo.component.html",
    styleUrls: ["./forms-demo.component.scss"],
})
export class FormsDemoComponent {
    public editMode = false;
    public form: Form = {
        author: {
            name: "Max Mustermann",
        },
        fields: [
            {
                type: "text",
                name: "Name",
                placeholder: "Firstname Lastname",
                description: "Insert your name.",
                id: "name",
                required: true,
                minLength: 5,
                maxLength: 50,
            },
            {
                type: "text",
                name: "Birthdate",
                id: "birthdate",
                required: true,
            },
            {
                type: "number",
                name: "Age",
                id: "age",
                description: "How old are you?",
                min: 18,
                max: 120,
                required: true,
            },
            {
                type: "textarea",
                name: "My CV",
                placeholder: "...",
                description: "Write something about yourself.",
                id: "cv",
            },
            {
                type: "date",
                name: "Application date",
                value: "2020-10-05",
                placeholder: "date",
                description: "When you send the application.",
                id: "date",
                readonly: true,
            },
            {
                type: "select",
                id: "rgb",
                name: "RGB",
                options: [
                    { name: "I like RGB.", value: "like" },
                    { name: "I hate RGB", value: "hate" },
                    { name: "What is RGB?", value: "what" },
                ],
            },
            {
                type: "check",
                id: "options",
                name: "Options",
                options: [
                    { name: "I want my application to be proccesed soon.", value: "soon" },
                    { name: "I want to be employed starting next month.", value: "nextMonth" },
                ],
            },
            {
                type: "radio",
                id: "free",
                name: "Free weekday",
                options: [
                    { name: "Monday", value: "Monday" },
                    { name: "Tuesday", value: "Tuesday" },
                    { name: "Wednesday", value: "Wednesday" },
                    { name: "Thursday", value: "Thursday" },
                    { name: "Friday", value: "Friday" },
                ],
            },
            {
                type: "check",
                id: "terms",
                name: "Terms & Conditions",
                requiredTrue: true,
                options: [
                    { name: "I agree to the terms and conditions", value: "terms" },
                ],
            },
        ],
        name: "Testform",
        date: new Date(2020, 10, 5),
    }

    public onSubmit(form: Form): void {
        // eslint-disable-next-line no-console
        console.log(form);
        // eslint-disable-next-line no-alert
        alert(`The form was submitted successfully.\nYour answers:\n\n${form.fields.map((f) => `${f.name}: ${f.value}`).join("\n")}`);
    }
}

import { Component } from "@angular/core";
import { Form } from "../../../../../schoolsquirrel/forms/src/public-api";

@Component({
    selector: "app-forms-demo",
    templateUrl: "./forms-demo.component.html",
    styleUrls: ["./forms-demo.component.scss"],
})
export class FormsDemoComponent {
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
            },
            {
                type: "text",
                name: "Birthdate",
                id: "birthdate",
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
        ],
        name: "Testform",
        date: new Date(2020, 10, 5),
    }
}

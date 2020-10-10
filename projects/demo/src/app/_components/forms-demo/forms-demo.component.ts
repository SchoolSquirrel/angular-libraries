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
        fields: [{
            type: "text",
            name: "Name",
            placeholder: "Firstname Lastname",
            description: "Insert your name",
            id: "name",
        }],
        name: "Testform",
        date: new Date(2020, 10, 5),
    }
}

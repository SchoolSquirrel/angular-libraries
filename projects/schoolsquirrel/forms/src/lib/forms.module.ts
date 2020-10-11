import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormComponent } from "./form.component";

@NgModule({
    declarations: [FormComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [FormComponent],
})
export class SchoolSquirrelFormsModule { }

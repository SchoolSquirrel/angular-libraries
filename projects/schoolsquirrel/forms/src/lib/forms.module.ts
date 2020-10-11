import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { FormComponent } from "./form.component";

@NgModule({
    declarations: [FormComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
    exports: [FormComponent],
})
export class SchoolSquirrelFormsModule { }

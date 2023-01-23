import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StyleModule} from "./style.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    StyleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    StyleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }

import {NgModule} from "@angular/core";
import { NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports: [
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
  ],
  exports: [
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
  ]
})

export class StyleModule { }

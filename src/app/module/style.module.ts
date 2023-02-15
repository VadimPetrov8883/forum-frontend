import {NgModule} from "@angular/core";
import { NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzLayoutModule} from "ng-zorro-antd/layout";

@NgModule({
  imports: [
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
  ],
  exports: [
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzMenuModule,
    NzLayoutModule,
  ]
})

export class StyleModule { }

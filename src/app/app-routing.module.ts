import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./core/page/login-page/login-page.component";

const routes: Routes = [
  { path:'', component: LoginPageComponent }
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  validateForm: any;
  form: FormGroup

  constructor(
    public fb: FormBuilder,
    public serviceAuth: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    })
  }

  submitForm() {
    this.serviceAuth.login()
  }


}

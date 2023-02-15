import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth/auth.service";
import {User} from "../../../shared/interfaces/auth.interface";
import {Router} from "@angular/router";

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
    public serviceAuth: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [false]
    })
  }

  submitForm() {
    const user: User = {
      userName: this.form.value.userName,
      password: this.form.value.password
    }

    this.serviceAuth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/']);
    })
  }


}

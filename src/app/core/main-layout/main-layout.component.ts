import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  constructor(
    public auth: AuthService
  ) { }

}

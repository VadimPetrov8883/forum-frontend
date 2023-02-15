import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from "./module/shared.module";
import {LoginPageComponent} from "./core/page/login-page/login-page.component";
import {HttpXsrfInterceptor} from "./shared/interceptors/csrf.interceptor";
import {WithCredentialsInterceptor} from "./shared/interceptors/with-credentials.interceptor";
import {MainLayoutComponent} from "./core/main-layout/main-layout.component";

const INTERCEPTOR_PROVIDER: Provider = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, multi: true, useClass: WithCredentialsInterceptor }
]

registerLocaleData(ru);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    INTERCEPTOR_PROVIDER,
    { provide: NZ_I18N, useValue: ru_RU }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

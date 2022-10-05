import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OptionComponent } from './component/option/option.component';
import { RegisterComponent } from './component/register/register.component';


import { AppComponent } from './app.component';
import{ SigninComponent} from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';
import { CheckComponent } from './component/check/check.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OptionComponent,
    RegisterComponent,
    SigninComponent,
    StuOptionComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


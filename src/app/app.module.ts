import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OptionComponent } from './component/option/option.component';
import { RegisterComponent } from './component/register/register.component';
import { ResgiterActivityComponent } from './component/resgiter-activity/resgiter-activity.component';
import { AppComponent } from './app.component';
import{ SigninComponent} from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';
import { CheckComponent } from './component/check/check.component';
import { ActivityComponent } from './component/activity/activity.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OptionComponent,
    RegisterComponent,
    SigninComponent,
    StuOptionComponent,
    CheckComponent,
    ResgiterActivityComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { OptionComponent } from './component/option/option.component';


import { AppComponent } from './app.component';
import{ SigninComponent} from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';
import { RegisterComponent } from './component/register/register.component';
import { ActivityComponent } from './component/activity/activity.component';
import { ResgiterActivityComponent } from './component/resgiter-activity/resgiter-activity.component';
import { CheckComponent } from './component/check/check.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    StuOptionComponent,
    OptionComponent,
    RegisterComponent,
    ActivityComponent,
    ResgiterActivityComponent,
    RegisterComponent,
    SigninComponent,
    StuOptionComponent,
    CheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


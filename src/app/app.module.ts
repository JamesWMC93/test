import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { OptionComponent } from './component/option/option.component';
import { RegisterComponent } from './component/register/register.component';
=======
import { RouterModule,Routes } from '@angular/router';
>>>>>>> a1fb5aa2bd3981a7f0e10b2a8f965661fce98a43
=======
>>>>>>> 6ed086b3304d9718890910377cc387d0e502fa82


import { OptionComponent } from './component/option/option.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    OptionComponent,
    RegisterComponent
=======
    SigninComponent,
    StuOptionComponent
>>>>>>> a1fb5aa2bd3981a7f0e10b2a8f965661fce98a43
=======
    SigninComponent,
    StuOptionComponent,
    OptionComponent
>>>>>>> 6ed086b3304d9718890910377cc387d0e502fa82
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


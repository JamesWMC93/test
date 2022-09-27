import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { StudentComponent } from './student/student.component';
import { JamesComponent } from './james/james.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { LoginComponent } from './component/login/login.component';
>>>>>>> 841788aab8b41b0c723b117df303182f0c7f3cff

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    StudentComponent,
    JamesComponent,
    SigninComponent,
    
=======
    LoginComponent
>>>>>>> 841788aab8b41b0c723b117df303182f0c7f3cff
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

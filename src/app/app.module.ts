import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { OptionComponent } from './component/option/option.component';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';

=======
import { RegisterComponent } from './component/register/register.component';
>>>>>>> aab808ac4a060a26653cfb8edd1acd73fe67a1b3

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    SigninComponent,
    StuOptionComponent,
    OptionComponent
=======
    OptionComponent,
    RegisterComponent
>>>>>>> aab808ac4a060a26653cfb8edd1acd73fe67a1b3
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


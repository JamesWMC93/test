import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { OptionComponent } from './component/option/option.component';
import { RegisterComponent } from './component/register/register.component';
=======
import { RouterModule,Routes } from '@angular/router';
>>>>>>> a1fb5aa2bd3981a7f0e10b2a8f965661fce98a43

import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';


const appRoute:Routes=[
  {path:"",component:SigninComponent},
  {path:'簽到',component: SigninComponent},
  {path:'Login',component: LoginComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    OptionComponent,
    RegisterComponent
=======
    SigninComponent,
    StuOptionComponent
>>>>>>> a1fb5aa2bd3981a7f0e10b2a8f965661fce98a43
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


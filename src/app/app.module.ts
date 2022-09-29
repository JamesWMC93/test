import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { RouterModule,Routes } from '@angular/router';
=======
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { OptionComponent } from './component/option/option.component';
>>>>>>> 6fda6f07d01958858b23dd494c827e358d929c6d

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
    SigninComponent,
    StuOptionComponent
=======
    OptionComponent
>>>>>>> 6fda6f07d01958858b23dd494c827e358d929c6d
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


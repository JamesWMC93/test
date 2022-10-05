import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './component/option/option.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';
import { RegisterComponent } from './component/register/register.component';
import { CheckComponent } from './component/check/check.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [{path:"",component:SigninComponent},
{path:'簽到',component: SigninComponent},
{path:'Login',component: LoginComponent},
{path:'Option',component: OptionComponent},
{path:'StuOption',component: StuOptionComponent},
{path:'會議室申請',component: RegisterComponent},
{path:'會議室查詢',component: CheckComponent},


]


const appRoute:Routes=[]
  
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
  exports: [RouterModule],
  bootstrap: [RouterModule]
})
export class AppRoutingModule { }

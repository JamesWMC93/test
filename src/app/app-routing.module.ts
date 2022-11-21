import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './component/option/option.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';
import { ActivityComponent } from './component/activity/activity.component';
import { RegisterComponent } from './component/register/register.component';
import { CheckComponent } from './component/check/check.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ResgiterActivityComponent } from './component/resgiter-activity/resgiter-activity.component';



const routes: Routes = [{path:"",component:LoginComponent},
{path:'簽到',component: SigninComponent},
{path:'Login',component: LoginComponent},
{path:'Option',component: OptionComponent},
{path:'StuOption',component: StuOptionComponent},
{path:'Activity',component: ActivityComponent},
{path:'會議室申請',component: RegisterComponent},
{path:'會議室查詢',component: CheckComponent},
{path:'ResgiterA',component: ResgiterActivityComponent},




]


const appRoute:Routes=[]
  
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
  exports: [RouterModule],
  bootstrap: [RouterModule]
})
export class AppRoutingModule { }

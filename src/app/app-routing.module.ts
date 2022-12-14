import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './component/admin/option/option.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/admin/sign-in/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/student/stu-option/stu-option.component';
import { ActivityComponent } from './component/student/activity/activity.component';
import { RegisterComponent } from './component/admin/MRoom/register/register.component';
import { CheckComponent } from './component/admin/MRoom/check/check.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ResgiterActivityComponent } from './component/student/resgiter-activity/resgiter-activity.component';
import { SelectMeetingComponent } from './component/admin/sign-in/select-meeting/select-meeting.component';
import { EventRegisterComponent } from './component/admin/event/event-register/event-register.component';
import { EventCheckComponent } from './component/admin/event/event-check/event-check.component';



const routes: Routes = [{path:"",component:LoginComponent},
{path:'signin',component: SigninComponent},
{path:'Login',component: LoginComponent},
{path:'Option',component: OptionComponent},
{path:'StuOption',component: StuOptionComponent},
{path:'Activity',component: ActivityComponent},
{path:'會議室申請',component: RegisterComponent},
{path:'會議室查詢',component: CheckComponent},
{path:'ResgiterA',component: ResgiterActivityComponent},
{path:'SelectMeeting', component: SelectMeetingComponent },
{path:'EventRegisterComponent', component: EventRegisterComponent },
{path:'EventCheckComponent', component: EventCheckComponent },




]


const appRoute:Routes=[]
  
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,HttpClientModule],
  exports: [RouterModule],
  bootstrap: [RouterModule]
})
export class AppRoutingModule { }

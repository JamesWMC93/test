import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from './services/student.service'

import { OptionComponent } from './component/admin/option/option.component';
import { RegisterComponent } from './component/admin/MRoom/register/register.component';
import { ResgiterActivityComponent } from './component/student/resgiter-activity/resgiter-activity.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/admin/sign-in/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/student/stu-option/stu-option.component';
import { CheckComponent } from './component/admin/MRoom/check/check.component';
import { ActivityComponent } from './component/student/activity/activity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectMeetingComponent } from './component/admin/sign-in/select-meeting/select-meeting.component';
import { EventRegisterComponent } from './component/admin/event/event-register/event-register.component';
import { EventCheckComponent } from './component/admin/event/event-check/event-check.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';


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
    ActivityComponent,
    SelectMeetingComponent,
    EventRegisterComponent,
    EventCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    
  ],
  providers:[
    StudentService,
  ],
  // providers: [{
  //   provide: HTTP_INTERCEPTORS, useClass: StudentService, multi: true}
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionComponent } from './component/option/option.component';
import { AppComponent } from './app.component';
import { SigninComponent } from './component/signin/signin.component';
import { LoginComponent } from './component/login/login.component';
import { StuOptionComponent } from './component/stu-option/stu-option.component';


const routes: Routes = [{path:"",component:SigninComponent},
{path:'簽到',component: SigninComponent},
{path:'Login',component: LoginComponent},
{path:'Option',component: OptionComponent},
{path:'StuOption',component: StuOptionComponent}

]


const appRoute:Routes=[]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

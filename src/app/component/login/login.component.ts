import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import{FormBuilder,Validators,FormGroup}from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';
import {Title} from "@angular/platform-browser";



@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title="Login";
  response:string=""
  registerForm!:FormGroup
  submitted=false;

  constructor(private fb: FormBuilder, private StudentService: StudentService, private http: HttpClient, private router:Router, private titleService:Title) 
  { 
    this.titleService.setTitle("系統");
  }
  onSend(id: string , pwd: string){
    const formData : FormData = new FormData()
    formData.append('id',id)
    formData.append('pwd',pwd)
    this.StudentService.onSendService(formData).subscribe
    (res=>{
      console.log(res);
      this.response= res
      alert("success")
      this.router.navigateByUrl('Option')
    },
    err=>{console.log(err);
    }
    );
  }

  ngOnInit() {

    this.registerForm =this.fb.group({
      eid:['',Validators.required],
      pwd:['',Validators.required]
    })
  }

  onSubmit(){
    this.submitted = true

    if(this.registerForm.invalid){
      return
    }
    alert("Success!")
  }

}

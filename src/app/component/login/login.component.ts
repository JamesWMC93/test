import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import{FormBuilder,Validators,FormGroup}from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient,HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title="Login";
  response:string=""
  constructor(private fb: FormBuilder, private StudentService: StudentService, private http: HttpClient) { 

  }
  onSend(id: string){
    const formData : FormData = new FormData()
    formData.append('id',id)
    this.StudentService.onSendService(formData).subscribe
    (res=>{
      console.log(res);
      this.response= res
    },
    err=>{console.log(err);
    }
    );
  }


  ngOnInit(): void {
    
  }

}

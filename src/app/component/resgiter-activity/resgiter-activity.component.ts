import { Component, OnInit } from '@angular/core';
import{FormBuilder , FormControl}from '@angular/forms';
import { Validators } from '@angular/forms';//驗證效果
import { StudentService } from 'src/app/services/student.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resgiter-activity',
  templateUrl: './resgiter-activity.component.html',
  styleUrls: ['./resgiter-activity.component.css']
})
export class ResgiterActivityComponent implements OnInit {
  public form:any;
  posts: any = [];
  constructor(private fb: FormBuilder, private productURL: StudentService,private http:HttpClient) { 
    this.form=this.fb.group({ 
      contactnum:"",
      name:"",
      id:""
    });

  }

  onSubmit(f:any){
    if(f.invalid){
      alert("invalid")
    }
    else
    {
      console.log(f);
      console.log(f.value);
      alert("success")
      
    }
    
  }

  ngOnInit(): void {
    this.http.get(environment.signin)
      .subscribe((response: any) => {
        this.posts = response;
      });
  }

}

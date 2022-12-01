import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { __values } from 'tslib';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  posts:any=[];
  lists:any=[];
  @Input("ts") res='';
  
  
  
  constructor(private productURL: StudentService, private nameList: StudentService,private http:HttpClient) { 
    
    
  }
  onSubmit(f: any) {

    if (f.invalid) {
      alert("invalid")
    }
    else {
      console.log(f);
      alert("success")

    }

  }

  ngOnInit(): void {
    this.http.get(environment.signin)
      .subscribe((response:any) => {
        this.posts = response;
      });

    this.http.get(environment.nameList)
      .subscribe((result:any) => {
        this.lists = result;
      });

    
    
  }

}

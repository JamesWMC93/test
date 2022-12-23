import { Subscription } from 'rxjs';
import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { __values } from 'tslib';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  posts:any=[];
  lists:any=[];
  truelist:any=[];
  test:any=true;
  start:string="開始點名"
  close:string="close"
  @Input("ts") res='';
  
  subscription: Subscription;
  ress: any;
  
  
  
  constructor(private http: HttpClient, private studentURL: StudentService,private router:Router) { 
    
    
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

  onSendStart(res){
    const formData: FormData = new FormData()
    formData.append('event', res)
    console.log(res)
    this.studentURL.onStartCamera(formData).subscribe((res: any) => {
      console.log(res)
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  onSendEnd(close) {
    const formData: FormData = new FormData()
    formData.append('close', close)
    this.studentURL.onCloseCamera(formData).subscribe((res: any) => {
      console.log(res)
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  onBack(){
    this.router.navigateByUrl('Option');
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

    this.http.get(environment.TrueNameList)
      .subscribe((result: any) => {
        this.truelist = result;
      });
    this.subscription = this.studentURL.getMessage().subscribe(val => {
      this.ress = val;
      console.log(this.ress)
    });
    
  }

}

import { Subscription } from 'rxjs';
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
  truelist:any=[];
  test:any=true;
  start:string="開始點名"
  end:string="結束點名"
  @Input("ts") res='';
  @Input("res") val = '';
  subscription: Subscription;
  
  
  
  constructor(private http: HttpClient, private studentURL: StudentService) { 
    
    
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

  onSendStart(start){
    const formData: FormData = new FormData()
    formData.append('start', start)
    this.studentURL.onSendServiceSignin(formData).subscribe((res: any) => {
      console.log(res)
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  onSendEnd(end) {
    const formData: FormData = new FormData()
    formData.append('end', end)
    this.studentURL.onSendServiceSignin(formData).subscribe((res: any) => {
      console.log(res)
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
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
   
    
  }

}

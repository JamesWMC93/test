import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { __values } from 'tslib';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-select-meeting',
  templateUrl: './select-meeting.component.html',
  styleUrls: ['./select-meeting.component.css']
})
export class SelectMeetingComponent implements OnInit {
  myimage: string = "OeZSbQUfFq.jpg";
  posts: any = [];
  form: any;
  Mname: string = "";
  StudentService: any;
  response :string="";


  constructor(private studentURL: StudentService, private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      Mname: new FormControl(this.Mname[0]),
    });


  }
  public baseHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTION,DELETE,PUT',
  };

  public setHeader(): any {
    let headersOption = {
      ...this.baseHeaders,
    };
    let httpOptions = {
      headers: new HttpHeaders(headersOption),
    };
    return httpOptions;
  }


  // public onSubmit(f: string) {
  //   const formData: FormData = new FormData()
  //   formData.append('f', f)
  //   this.StudentService.onSendService(formData).subscribe((res: any) => {
  //     console.log(res)
  //     this.response = res;
  //   },
  //     (err: any) => {
  //       console.log(err)
  //     }
  //   )
    
  //   // this.http.post("http://192.168.126.226/face/roll-call/api/post/openDemo.php",f,{
  //   //     headers: this.setHeader().headers,
  //   //   })
  //   //     .subscribe((result) => {
  //   //       console.log("result", result);
  //   //     })
  //   //   console.log(f);
  //   //   // alert("success")
  //   //   this.router.navigateByUrl('signin');
    

  // }

  public onSend(name:string){
    const formData : FormData =new FormData()
    formData.append('name', name)
    this.studentURL.onSendService(formData).subscribe((res: any)=>{
      console.log(res)
      this.response=res;
    },
      (err: any)=>{
      console.log(err)
    }
    )
  }

  ngOnInit(): void {
    this.http.get(environment.signin)
      .subscribe((response: any) => {
        this.posts = response;
        
      });
  }


}

import { Component, Input, OnInit } from '@angular/core';
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
  posts: any = [];
  form: any;
  @Input() Mname: string = "";
  response :string="";
  name_id: number[]=[];


  constructor(private studentURL: StudentService, private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // this.form = this.fb.group({
    //   Mname: new FormControl(this.Mname[0]),
    // });


  }



  public onSubmit(f: string) {
    const formData: FormData = new FormData()
    formData.append('f', f)
    this.studentURL.onSendService(formData).subscribe((res: any) => {
      console.log(res)
      this.response = res;
    },
      (err: any) => {
        console.log(err)
      }
    )
    
  
    
  }

  public onSend(Mname:string){
    const formData : FormData =new FormData()
    formData.append('Mname', Mname)
    this.studentURL.onSendService(formData).subscribe((res: any)=>{
      console.log(res)
      this.response=res;
      this.router.navigateByUrl('signin');
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

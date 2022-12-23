import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder } from '@angular/forms';//form
import { __values } from 'tslib';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-select-meeting',
  templateUrl: './select-meeting.component.html',
  styleUrls: ['./select-meeting.component.css']
})
export class SelectMeetingComponent {
  posts: any = [];
  response :string="";  
  ts:string="";
  lallalal: any;
  subscription: Subscription;
  mt: any;
  res:any="";


  constructor(private studentURL: StudentService, private fb: FormBuilder, private http: HttpClient, private router: Router) {
    // this.form = this.fb.group({
    //   Mname: new FormControl(this.Mname[0]),
    // });


  }


  public onSend(Mname:string){
    const formData : FormData =new FormData()
    formData.append('event2', Mname)
    this.ts = Mname;
    this.studentURL.onCheckEvent2(formData).subscribe((res: any)=>{
      this.response=res;    
      this.studentURL.setMessage(res);
      
      alert("success")
      
      // this.router.navigateByUrl('signin');
    },
      (err: any)=>{
      console.log(err)
    }
    )
  }

  ngOnInit(): void {
    this.http.get(environment.MeetingRoom)
      .subscribe((response: any) => {
        this.posts = response;
        
      });

    this.subscription = this.studentURL.getMessage().subscribe(val => {
      this.res = val;
      console.log(this.res)
    });
    
  }


}

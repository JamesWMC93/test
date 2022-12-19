import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder } from '@angular/forms';//form
import { __values } from 'tslib';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-check',
  templateUrl: './event-check.component.html',
  styleUrls: ['./event-check.component.css']
})
export class EventCheckComponent {

  activities: any = [];
  response: any;
  res:any;
  idd:any;
  subscription: Subscription;
  constructor(private studentURL: StudentService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.activity)
      .subscribe((response: any) => {
        this.activities = response;
      });

    this.subscription = this.studentURL.getMessage().subscribe(val => {
      this.res = val;
    });
  }

  clickBtn(activities:any) {

    const formData: FormData = new FormData()
    formData.append('Mname', activities)
    this.studentURL.onSendServiceSignin(formData).subscribe((res: any) => {
      console.log(res)
      this.response = res;
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
  }


}

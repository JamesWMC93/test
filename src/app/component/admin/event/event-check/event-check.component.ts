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
  idd:any=sessionStorage.getItem("id");
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

  clickCheck(activities:any) {
    // this.router.navigateByUrl("CheckEventInformationComponent");
    const formData: FormData = new FormData()
    formData.append('event', activities)

    this.studentURL.onReadrecord(formData).subscribe((res: any) => {
      this.response = res;
      this.studentURL.setMessage(res);
      
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  onBack(){
    this.router.navigateByUrl("Option");
  }

}

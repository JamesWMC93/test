import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-check-event-information',
  templateUrl: './check-event-information.component.html',
  styleUrls: ['./check-event-information.component.css']
})
export class CheckEventInformationComponent implements OnInit {
  subscription: Subscription;
  res: any;
  response: any;

  constructor(private studentURL:StudentService,private http:HttpClient,private router:Router ) { }

  onBack(){
    const formData: FormData = new FormData()
    formData.append('coor', sessionStorage.getItem("id"))
    this.router.navigateByUrl('EventCheckComponent');
    this.studentURL.onCheckEvent(formData).subscribe((res: any) => {
      this.response = res;
      this.studentURL.setMessage(res);
      
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.subscription = this.studentURL.getMessage().subscribe(val => {
      this.res = val;
    });
  }

}

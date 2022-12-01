import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities:any=[];

  constructor(private activityURL:StudentService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.activity)
    .subscribe((response:any) => {
      this.activities = response;
    });
  }

  clickBtn(){
    this.router.navigateByUrl('ResgiterA');
  }

}

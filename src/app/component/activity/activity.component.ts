import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities:any=[];

  constructor(private activityURL:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.activityURL.getActivity()
    .subscribe((response:any) => {
      this.activities = response;
    });
  }

  clickBtn(){
    this.router.navigateByUrl('ResgiterA');
  }

}

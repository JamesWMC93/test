import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities:any=[];

  constructor(private activityURL:StudentService) { }

  ngOnInit(): void {
    this.activityURL.getActivity()
    .subscribe((response:any) => {
      this.activities = response;
    });
  }

}

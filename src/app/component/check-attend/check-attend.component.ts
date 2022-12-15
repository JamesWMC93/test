import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-check-attend',
  templateUrl: './check-attend.component.html',
  styleUrls: ['./check-attend.component.css']
})
export class CheckAttendComponent implements OnInit {
  checklist:any =[];

  constructor(private activityURL:StudentService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.checkatt)
    .subscribe((response:any) => {
      this.checklist = response;
    });
  }

}

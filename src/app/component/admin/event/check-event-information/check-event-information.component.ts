import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-event-information',
  templateUrl: './check-event-information.component.html',
  styleUrls: ['./check-event-information.component.css']
})
export class CheckEventInformationComponent implements OnInit {
  subscription: Subscription;
  res: any;

  constructor(private studentURL:StudentService,private http:HttpClient ) { }

  ngOnInit(): void {
    this.subscription = this.studentURL.getMessage().subscribe(val => {
      this.res = val;
    });
  }

}

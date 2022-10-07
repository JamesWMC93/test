import { Component, OnInit } from '@angular/core';
import{FormBuilder , FormControl}from '@angular/forms';

@Component({
  selector: 'app-resgiter-activity',
  templateUrl: './resgiter-activity.component.html',
  styleUrls: ['./resgiter-activity.component.css']
})
export class ResgiterActivityComponent implements OnInit {
  resgiterActivity:any;
  constructor(private fb:FormBuilder ) { }

  ngOnInit(): void {
  }

}

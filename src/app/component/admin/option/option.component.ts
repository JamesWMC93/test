import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor(private router: Router) { }

  clickBtn() {
    this.router.navigateByUrl('SelectMeeting');
  }
  clickMRegister() {
    this.router.navigateByUrl('會議室申請');
  }

  clickCheck() {
    this.router.navigateByUrl('會議室查詢');
  }

  clickEventRegister() {
    this.router.navigateByUrl('EventRegisterComponent');
  }


  clickEventCheck() {
    this.router.navigateByUrl('EventCheckComponent');
  }
  ngOnInit(): void {
  }

}

import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  
  response: any;
  subscription: Subscription;

  

  constructor(private router: Router, private studentURL:StudentService) { }

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
    const formData: FormData = new FormData()
    formData.append('coor', sessionStorage.getItem("id"))
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
    
  }

}

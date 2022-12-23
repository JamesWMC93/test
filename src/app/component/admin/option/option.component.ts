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



  constructor(private router: Router, private studentURL: StudentService) { }


  clickBtn() {
    const formData: FormData = new FormData()
    formData.append('coor', sessionStorage.getItem("id"))
    this.router.navigateByUrl('SelectMeeting');
    this.studentURL.onCheckEvent(formData).subscribe((res: any) => {
      this.response = res;
      this.studentURL.setMessage(res);
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  clickMRegister(會議室申請) {
    this.router.navigateByUrl('會議室申請');
  }

  clickCheck(會議室查詢) {
    
    this.router.navigateByUrl('會議室查詢');
  }

  clickEventRegister(EventRegisterComponent) {
    
   this.router.navigateByUrl('EventRegisterComponent');
  }
  
  clickEventCheck() {
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


  logout() {
    sessionStorage.removeItem('id');
    alert("已登出")
    this.router.navigateByUrl('Login');
  }

  ngOnInit(): void {

  }

}

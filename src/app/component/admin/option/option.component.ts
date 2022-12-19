import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  ks:string="10743055"
  response: any;
  

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


  clickEventCheck(ks) {
    this.router.navigateByUrl('EventCheckComponent');
    const formData: FormData = new FormData()
    formData.append('Mname', ks)
    this.studentURL.onSendServiceSignin(formData).subscribe((res: any) => {
      console.log(res)
      this.response = res;
      this.studentURL.setMessage(res);
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

}

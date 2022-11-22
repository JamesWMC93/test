import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { __values } from 'tslib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-meeting',
  templateUrl: './select-meeting.component.html',
  styleUrls: ['./select-meeting.component.css']
})
export class SelectMeetingComponent implements OnInit {
  myimage: string = "OeZSbQUfFq.jpg";
  posts: any = [];
  form: any;
  Mname: string = "";

  constructor(private productURL: StudentService, private fb: FormBuilder, private http: HttpClient,private router:Router) { 
    this.form = this.fb.group({
      Mname: new FormControl(this.Mname[0]),
    });


  }


  onSubmit(f: any) {

    if (f.invalid) {
      alert("invalid")
    }
    else {
      this.http.post("https://192.168.0.5/face/roll-call/test.php/", f)
        .subscribe((result) => {
          console.log("result", result);
        })
      console.log(f);
      alert("success")
      this.router.navigateByUrl('簽到');
    }

  }

  ngOnInit(): void {
    this.productURL.getSignin()
      .subscribe((response: any) => {
        this.posts = response;
        this.Mname = response.Mname;
      });
  }


}

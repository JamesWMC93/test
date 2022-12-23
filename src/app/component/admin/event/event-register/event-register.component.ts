import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators, FormControl } from '@angular/forms';//驗證效果
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';//form
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  form: FormGroup;
  response: any;
  MRoom:any="";

  constructor(private http: HttpClient, private studentURL: StudentService, private router: Router) {
  }


  ngOnInit(): void {
    this.http.get(environment.MeetingRoom)
      .subscribe((response: any) => {
        this.MRoom = response;
      });


    this.form = new FormGroup({
      coor: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      start: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      place: new FormControl(null, Validators.required),
      end: new FormControl(null, Validators.required),
      numPpl: new FormControl(null, Validators.required),

    });
  }

  onSubmit(form: any) {
     
      const formData: FormData = new FormData()
      formData.append('name', form.name)
      formData.append('place', form.place)
      formData.append('date', form.date)
      formData.append('start', form.start)
      formData.append('coor', form.coor)
      formData.append('end', form.end)
      formData.append('numPpl', form.numPpl)
      
    this.studentURL.onRegisterEvent(formData).subscribe((res: any) => {
        
        this.response = res;
      if (res =="活動申請成功"){
        alert(res)
        window.location.reload();
      }else{
        alert(res)
        window.location.reload();
      }
      },
        (err: any) => {
          console.log(err)
          
        }
      )
    


  }

  clickEventCheck() {
    this.router.navigateByUrl('EventCheckComponent');
  }
  clickOption() {
    this.router.navigateByUrl('Option');
  }

  clickEventRegister() {
    this.router.navigateByUrl('EventRegisterComponent');
  }

}

import { __values } from 'tslib';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators, FormControl } from '@angular/forms';//驗證效果
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';//form
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {

  form: FormGroup;
  response: any;

  constructor(private http: HttpClient, private studentURL:StudentService) {
  }


  ngOnInit(): void {
    this.form=new FormGroup({
      id:new FormControl(null,Validators.required),
      name: new FormControl(null, Validators.required),
      time: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      place: new FormControl(null, Validators.required)
    });
  }

  onSubmit(form:any){
    const formData: FormData = new FormData()
    formData.append('name', form.name)
    formData.append('place', form.place)
    formData.append('date', form.date)
    formData.append('time', form.time)
    formData.append('id', form.id)
   
    this.studentURL.onSendService(formData).subscribe((res: any) => {
      console.log(res)
      this.response = res;
      alert("success")
      // this.router.navigateByUrl('signin');
    },
      (err: any) => {
        console.log(err)
      }
    )

  }

}

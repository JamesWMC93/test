import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators } from '@angular/forms';//驗證效果
import { FormBuilder } from '@angular/forms';//form
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  form:any;
  response: any;
  constructor(private fb:FormBuilder, private titleService: Title,private http:HttpClient,private studentURL:StudentService) 
  { 
    this.titleService.setTitle("會議室使用申請");
    this.form=this.fb.group({
      // fid:["",[Validators.required,Validators.minLength(5)]],
      name:["",[Validators.required,Validators.minLength(8)]],
      place:["",[Validators.required]],
      date:["",[Validators.required]],
      // ftime:["",[Validators.required]]
    });

  }

  onSubmit(f:any){
    if (f.invalid) {
      alert("invalid")
    }
    else {
      this.http.post("http://192.168.0.3/face/roll-call/db_event.php", f)
        .subscribe((result) => {
          console.log("result", result);
        })
      console.log(f);
      alert("success")

    }
    
  }

  public onSend(name: string, place: string, date:string,time:string) {
    const formData: FormData = new FormData()
    // formData.append('name', name)
    // formData.append('place', place)
    // formData.append('date', date)
    formData.append('time', time)
    this.studentURL.onKaiXian(formData).subscribe((res: any) => {
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

  ngOnInit(): void {
  }

}

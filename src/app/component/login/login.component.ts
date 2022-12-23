import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Title } from "@angular/platform-browser";




@Component({
  selector: 'app-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Login";
  response: string = ""
  registerForm!: FormGroup
  submitted = false;
  form: FormGroup;
  


  constructor(private fb: FormBuilder, private studentURL: StudentService, private http: HttpClient, private router: Router, private titleService: Title) {
    this.titleService.setTitle("系統");
  }
  


  onSubmit(form: any) {

    const formData: FormData = new FormData()
    formData.append('id', form.id)
    formData.append('pwd', form.pwd)
    this.studentURL.onLogin(formData).subscribe((res: any) => {
      console.log(res)
      this.response = res;
      if (this.response =="success"){
        alert("成功登錄")
        sessionStorage.setItem('id', form.id);
        this.router.navigateByUrl("Option")
      }
      else
      {
        alert(res)
        window.location.reload()
      }

    },
      (err: any) => {
        console.log(err)

      }
    )

    

  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      pwd: new FormControl(null, Validators.required),
    });

    
  }


}

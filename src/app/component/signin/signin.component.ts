import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
import { FormBuilder, FormControl } from '@angular/forms';//form
import { __values } from 'tslib';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  posts:any=[];
  lists:any=[];
  form: any;
  Mname:string="";
  
  
  constructor(private productURL: StudentService, private nameList: StudentService, private fb: FormBuilder,  private http: HttpClient) { 
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

    }

  }

  ngOnInit(): void {
    this.productURL.getSignin()
      .subscribe((response:any) => {
        this.posts = response;
        this.Mname = response.Mname;
      });

      this.nameList.getNamelist()
      .subscribe((result:any) => {
        this.lists = result;
      });
    
  }

}

import { Component, OnInit } from '@angular/core';
import{FormBuilder , FormControl}from '@angular/forms';
import { Validators } from '@angular/forms';//驗證效果
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-resgiter-activity',
  templateUrl: './resgiter-activity.component.html',
  styleUrls: ['./resgiter-activity.component.css']
})
export class ResgiterActivityComponent implements OnInit {
  form:any;
  posts: any = [];
  constructor(private fb: FormBuilder, private productURL: StudentService) { 
    this.form=this.fb.group({ 
      contactnum:"",
      name:"",

    });

  }

  onSubmit(f:any){
    if(f.invalid){
      alert("invalid")
    }
    else
    {
      console.log(f);
      console.log(f.value);
      alert("success")
      
    }
    
  }

  ngOnInit(): void {
    this.productURL.getSignin()
      .subscribe((response: any) => {
        this.posts = response;
      });
  }

}

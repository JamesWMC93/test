import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators } from '@angular/forms';//驗證效果
import { FormBuilder } from '@angular/forms';//form
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  form:any;
  constructor(private fb:FormBuilder, private titleService: Title) 
  { 
    this.titleService.setTitle("會議室使用申請");
    this.form=this.fb.group({
      fid:["",[Validators.required,Validators.minLength(5)]],
      fname:["",[Validators.required,Validators.minLength(8)]],
      froom:["",[Validators.required]],
      fdate:["",[Validators.required]],
      ftime:["",[Validators.required]]
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
  }

}

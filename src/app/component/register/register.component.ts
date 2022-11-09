import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, Validators } from '@angular/forms';//驗證效果
import { FormBuilder } from '@angular/forms';//form
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
  form:any;
  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({
      unit:["",[Validators.required,Validators.minLength(5)]],
      reason:["",[Validators.required,Validators.minLength(8)]],
      name:["",[Validators.required]],
      date:["",[Validators.required]],
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

import { Component, OnInit } from '@angular/core';
import{FormBuilder , FormControl}from '@angular/forms';
import { Validators } from '@angular/forms';//驗證效果

@Component({
  selector: 'app-resgiter-activity',
  templateUrl: './resgiter-activity.component.html',
  styleUrls: ['./resgiter-activity.component.css']
})
export class ResgiterActivityComponent implements OnInit {
  form:any;
  constructor(private fb:FormBuilder) { 
    this.form=this.fb.group({ 
        name:["",[Validators.required]],
        age:"",
        gender:"2"
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

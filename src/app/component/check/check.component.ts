import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';//form
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public form:any;
  posts: any = [];
  constructor(private fb: FormBuilder) { 
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
  }

  
}

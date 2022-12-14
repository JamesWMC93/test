import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';//form
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit {
  public form:any;
  posts: any = [];
  constructor(private fb: FormBuilder, private StudentService: StudentService, private router: Router, private titleService: Title) 
  { 
    this.titleService.setTitle("會議室使用查詢");
    this.form=this.fb.group({ 
      s_date:"",
      e_date:"",
      froom:"",
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

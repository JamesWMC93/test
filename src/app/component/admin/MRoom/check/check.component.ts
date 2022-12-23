import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';//form
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

export interface list {
  name: string;
  num: number;
  time: number;
  status: string;
}

const list_DATA: list[] = [
  {num: 1, name: 'Hydrogen', time: 1.0079, status: 'good'},
  {num: 2, name: 'Helium', time: 4.0026, status: 'good'},
  {num: 3, name: 'Lithium', time: 6.941, status: 'good'},
  {num: 4, name: 'Beryllium', time: 9.0122,status: 'good'},
  {num: 5, name: 'Boron', time: 10.811, status: 'good'},
  {num: 6, name: 'Carbon', time: 12.0107, status: 'good'},
  {num: 7, name: 'Nitrogen', time: 14.0067, status: 'good'},
  {num: 8, name: 'Oxygen', time: 15.9994, status: 'good'},
  {num: 9, name: 'Fluorine', time: 18.9984, status: 'good'},
  {num: 10, name: 'Neon', time: 20.1797, status: 'good'},
];

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

  array:any =[
    {num: 1, name: 'Hydrogen', time: 1.0079, status: 'good'},
    {num: 2, name: 'Helium', time: 4.0026, status: 'good'}
  ]


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
  onBack() {
    this.router.navigateByUrl("Option")
  }
  
}

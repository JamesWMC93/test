import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  posts:any=[];
  lists:any=[];
  
  constructor(private productURL:StudentService,private nameList:StudentService) { 
    
  }

  ngOnInit(): void {
    this.productURL.getSignin()
      .subscribe((response:any) => {
        this.posts = response;
      });

      this.nameList.getNamelist()
      .subscribe((result:any) => {
        this.lists = result;
      });
    
  }

}

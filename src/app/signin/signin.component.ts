import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../services/student.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userList:any=[];
  
  constructor(private httpClient:HttpClient) { 
    this.userList=[]
  }

  ngOnInit(): void {
    // this.productURL.getPosts()
    //   .subscribe((response:any) => {
    //     this.posts = response;
    //   });
    this.getUserList()
  }
getUserList()
{
  this.httpClient.get('https://raw.githubusercontent.com/tankhaihong/test/main/project.json').subscribe((result:any)=>
  {
    this.userList=result;
  })
}
}

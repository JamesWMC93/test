import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import{FormBuilder , FormControl}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:any;
  posts: any = [];

  constructor(private fb: FormBuilder, private productURL: StudentService) { 
    this.form=this.fb.group({ 
      name:"",
      id:"",
      pwd:""
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

  closewin()
  {
  window.open('', '_self', ''); window.close();
  }
  
  ngOnInit(): void {
    this.productURL.getActivity()
    .subscribe((response: any) => {
      this.posts = response;
    });
  }

}


  // ShowTime() {
  //     var NowDate = new Date();
  //     var y = NowDate.getFullYear();
  //     var m = NowDate.getMonth() + 1;
  //     var d = NowDate.getDate();
  //     var h = NowDate.getHours();
  //     var i = NowDate.getMinutes();
  //     var s = NowDate.getSeconds();
  //     document.getElementById('showbox').innerHTML = y + '-' + m + '-' + d + '-' + h + ':' + i + ':' + s;
  //     setTimeout('ShowTime()', 1000);
  // }


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }


  closewin()
  {
  window.open('', '_self', ''); window.close();
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

  ngOnInit(): void {
  }

}

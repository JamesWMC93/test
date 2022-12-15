import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }
  title = 'test';

  clickLogin() {
    this.router.navigateByUrl('Login');
  }

  clickSignin() {
    this.router.navigateByUrl('signin');
  }

  clickOption() {
    this.router.navigateByUrl('Option');
  }
}

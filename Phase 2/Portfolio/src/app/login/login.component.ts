import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') == 'true'){
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {

    const user  = JSON.parse(<string>localStorage.getItem('user'));

    if (user['username'] === this.username && user['password'] === this.password){
      localStorage.setItem("loggedIn", 'true');
      this.router.navigate(['/']);
    }else
    {
      alert('Credentials does not match')
    }

  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  first_name = '';
  last_name = '';
  username = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') == 'true'){
      this.router.navigate(['/']);
    }
  }

  onSubmit(): void {
    const values = {
      'first_name': this.first_name,
      'last_name': this.last_name,
      'username': this.username,
      'password': this.password,
    };

    localStorage.setItem("user", JSON.stringify(values));
    localStorage.setItem("loggedIn", 'true');
    alert('User Registered Successfully')
    this.router.navigate(['/']);

  }

}

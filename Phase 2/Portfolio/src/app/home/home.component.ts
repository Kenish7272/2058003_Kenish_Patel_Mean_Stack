import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:any = '';
  name:any = '';
  number:any = '';
  contacts:any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') != 'true'){
      this.router.navigate(['login']);
    }

    this.username = JSON.parse(<string>localStorage.getItem('user'))['first_name']
    this.contacts = JSON.parse(<string>localStorage.getItem('contacts')) || [];
  }

  save():void {
    const oldData = JSON.parse(<string>localStorage.getItem('contacts')) || [];

    let length = 0;
    for(let k in oldData) if(oldData.hasOwnProperty(k)) length++;

    var values = {
      'name': this.name,
      'number': this.number,
    };

    oldData[length] = values
    localStorage.setItem("contacts", JSON.stringify(oldData));
    this.contacts = JSON.parse(<string>localStorage.getItem('contacts')) || [];
    this.name = '';
    this.number = '';
  }

  logout(): void{
    localStorage.removeItem('loggedIn')
    this.router.navigate(['login']);
  }


}

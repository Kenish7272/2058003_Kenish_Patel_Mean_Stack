import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskTracker';
  tasks:any = [];
  id = '';
  name = '';
  task = '';
  deadline = '';

  ngOnInit(): void {
    this.tasks = JSON.parse(<string>localStorage.getItem('tasks')) || [];
  }

  save(): void{
    const oldData = JSON.parse(<string>localStorage.getItem('tasks')) || [];

    let length = 0;
    for(let k in oldData) if(oldData.hasOwnProperty(k)) length++;

    if (this.id == '' || this.name == '' || this.task == '' || this.deadline == ''){
      alert('Data is required')
      return;
    }

    let values = {
      'id': this.id,
      'name': this.name,
      'task': this.task,
      'deadline': this.deadline,
    };

    oldData[length] = values
    localStorage.setItem("tasks", JSON.stringify(oldData));
    this.tasks = JSON.parse(<string>localStorage.getItem('tasks')) || [];

    this.id = '';
    this.name = '';
    this.task = '';
    this.deadline = '';

  }
}

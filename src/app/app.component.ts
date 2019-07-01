import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoListApp';
  todoObjects : Todo[] = [
    {
      task: "This is a todo item",
      completed: false,
    },
    {
      task: "This is another todo item?",
      completed: true,
    },
    {
      task: "Feed your fish",
      completed: false
    },
    {
      task: "Water the bushes",
      completed: false
    }


  ];






}





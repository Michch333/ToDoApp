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
  filteredItem: string = '';

  constructor() {
    const todoObjects = [
      {
        task: "This is a todo item",
        completed: true,
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
    ]

    this.todoObjects = todoObjects;
    this.filteredTodoObjects = todoObjects; 
  }


  removeTask(i) {
    this.filteredTodoObjects.splice(i,1);
  }

  completedTask(i) {
    this.filteredTodoObjects[i].completed= true
  }

  addItem (newItem) {
    let inputItem = {
      task: newItem,
      completed: false
    }
    this.filteredTodoObjects.push(inputItem);
  }

  filterItems(event: KeyboardEvent){
    this.filteredTodoObjects = this.todoObjects.filter(td => td.task
      .toUpperCase()
      .startsWith((<HTMLInputElement>event.target).value.toUpperCase()));
  }

  todoObjects : Todo[];
  filteredTodoObjects: Todo[];

}





import { Component } from '@angular/core';
import { TodoItem } from '../modules/todoItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  id !: number;
  rand!:number;
  onClick(id:number):number  {
    this.rand = Math.floor(Math.random() * id) + 1;
    return this.rand;
  }

  Subject = [ "Math", "English", "History", "Geography","Coding","DataScience"]



  todo : TodoItem [] = [
    new TodoItem("Walk the dog"),
    new TodoItem("Playing football",true),
    new TodoItem("Studing")
  ]
  
  filterList: string = '1';
  get visibleList() : TodoItem[] {
    let value = this.filterList;
    if(value == '1'){
      return this.todo;
    }else if(value == '2'){
      return this.todo.filter(item => !item.iscompleted)
    }
    else {
      return this.todo.filter(item => item.iscompleted)
    }
  }

}

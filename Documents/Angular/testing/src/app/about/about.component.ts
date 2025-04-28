import { Component } from '@angular/core';
import { TodoItem } from '../../modules/todoItems';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

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

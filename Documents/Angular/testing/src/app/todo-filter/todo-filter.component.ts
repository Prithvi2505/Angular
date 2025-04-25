import { Component } from '@angular/core';
import { TodoItem } from '../../modules/todoItems';

@Component({
  selector: 'todo-filter',
  standalone: false,
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {
  filterList: string = '1';

  changeFilter(value :any) {
    
  }
}

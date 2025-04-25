import { Component, Input } from '@angular/core';
import { TodoItem } from '../../modules/todoItems';


@Component({
  selector: 'todolist',
  standalone: false,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  @Input() Todo : TodoItem[] = [];
  toggle(item:TodoItem) {
    item.iscompleted = !item.iscompleted;
    console.log(item)
  }
}

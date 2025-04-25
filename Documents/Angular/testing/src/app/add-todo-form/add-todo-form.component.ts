import { Component, Output, EventEmitter } from '@angular/core';

import { TodoItem } from '../../modules/todoItems';

@Component({
  selector: 'add-todo-form',
  standalone: false,
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent {
@Output() addTodo = new EventEmitter<TodoItem>();
  newTodoText ='';
    addNewTodo(){
      // this.todo.push(new TodoItem(this.newTodoText));
      this.addTodo.emit(new TodoItem(this.newTodoText));
      this.newTodoText='';
    }

}

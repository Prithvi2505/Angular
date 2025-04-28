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
}

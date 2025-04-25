import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './todolist/todolist.component';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoFilterComponent } from './todo-filter/todo-filter.component';
import { TestingDirective } from './testing.directive';
import { HostComponent } from './host/host.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddTodoFormComponent,
    TodoFilterComponent,
    TestingDirective,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

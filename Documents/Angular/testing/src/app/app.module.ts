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
import { JsComponent } from './js/js.component';
import { AgComponent } from './ag/ag.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ErrorComponent } from './error/error.component';
import { FormsComponent } from './forms/forms.component';

const appRoute: Routes =[
  {path:'', component:LandingPageComponent},
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Forms', component:FormsComponent},
  {path:'**',component:ErrorComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddTodoFormComponent,
    TodoFilterComponent,
    TestingDirective,
    HostComponent,
    JsComponent,
    AgComponent,
    HomeComponent,
    AboutComponent,
    LandingPageComponent,
    ErrorComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

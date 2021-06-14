import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { EditTodoComponent } from './todo-list/edit-todo/edit-todo.component';
import { TodoFormComponent } from './todo-list/shared/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    AddTodoComponent,
    EditTodoComponent,
    TodoFormComponent
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

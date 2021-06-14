import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { EditTodoComponent } from './todo-list/edit-todo/edit-todo.component';
import { EditToDoResolver } from './todo-list/edit-todo/edit-todo.resolver';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoListComponent
  },
  {
    path: 'todos/add',
    component: AddTodoComponent
  },
  {
    path: 'todos/edit/:todoId',
    component: EditTodoComponent,
    resolve: {
      todo: EditToDoResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

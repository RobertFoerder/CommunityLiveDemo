import { Injectable } from '@angular/core';
import { ToDo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: ToDo[] = [
    {
      id: 1,
      name: 'Vorbereitung Live Demo',
      description: 'Live Demo für Community Treffen vorbereiten',
      done: false
    },
    {
      id: 2,
      name: 'Wäsche waschen',
      description: '',
      done: false
    },
    {
      id: 3,
      name: 'Stunden buchen',
      description: 'DATEV Stunden für Mai in SAP eintragen',
      done: true
    }
  ]

  constructor() { }

  getTodos(): ToDo[] {
    return this.todos.sort(function(a, b){return b.id - a.id});
  }

  getTodo(id: number): ToDo {
    return this.todos.find(t => t.id === id);
  }

  addTodo(todo: ToDo) {
    const id = Math.max(...this.todos.map(todo => todo.id)) + 1;
    todo.id = id;
    this.todos.push(todo);
  }

  editTodo(todo: ToDo) {
    const existingTodo = this.todos.find(t => t.id === todo.id);
    this.todos[this.todos.indexOf(existingTodo)] = todo;
  }

  deleteTodo(id: number) {
    const existingTodo = this.todos.find(t => t.id === id);
    this.todos.splice(this.todos.indexOf(existingTodo), 1);
  }
}

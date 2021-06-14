import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  filter: 'all' | 'done' | 'notDone' = 'all';

  todos: ToDo[] = [];

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  saveTodo(todo: ToDo) {
    this.todoService.editTodo(todo);
  }

  showToDo(todo: ToDo): boolean {
    return this.filter === 'all' ||
    this.filter === 'done' && todo.done || 
    this.filter === 'notDone' && !todo.done;
  }

}

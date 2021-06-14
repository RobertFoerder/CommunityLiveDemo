import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/models/todo';
import { Location } from '@angular/common';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less']
})
export class AddTodoComponent implements OnInit {

  constructor(private readonly location: Location,
    private readonly todoService: TodoService) { }

  ngOnInit(): void {
  }

  save(todo: ToDo) {
    this.todoService.addTodo(todo);
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}

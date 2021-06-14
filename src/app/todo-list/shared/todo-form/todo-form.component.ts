import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.less']
})
export class TodoFormComponent implements OnInit {

  @Input()
  todo: ToDo = {
    id: 0,
    name: '',
    description: '',
    done: false
  };

  @Output()
  cancelled: EventEmitter<null> = new EventEmitter();

  @Output()
  submitted: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.cancelled.emit();
  }

  save() {
    this.submitted.emit(this.todo);
  }

}

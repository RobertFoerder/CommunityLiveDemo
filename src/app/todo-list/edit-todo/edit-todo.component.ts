import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.less']
})
export class EditTodoComponent implements OnInit {

  todo!: ToDo;

  constructor(private readonly location: Location,
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.todo = this.route.snapshot.data['todo'];
  }

  cancel() {
    this.location.back();
  }

  save(todo: ToDo) {
    this.todoService.editTodo(todo);
    this.location.back();
  }

}

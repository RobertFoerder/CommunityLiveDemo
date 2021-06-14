import { Directive, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToDo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Injectable(
  {providedIn: 'root'}
)
export class EditToDoResolver implements Resolve<ToDo> {

  constructor(private readonly todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ToDo {
    const id = route.paramMap.get('todoId');
    return this.todoService.getTodo(+id);
  }

}

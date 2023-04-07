import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filterTasks } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filterVarious: filterTasks): Todo[] {

    switch (filterVarious) {
      case 'completados':
        return todos.filter(item => item.isCompleted);
      case 'pendientes':
        return todos.filter(item => !item.isCompleted);
      default:
        return todos;
    }
  }

}

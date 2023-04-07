import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { removeAllCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filterCurrent: actions.filterTasks = "todos";
  filterList: actions.filterTasks[] = ['todos', 'completados', 'pendientes'];
  pendingTotal: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter => this.filterCurrent = filter);
    this.store.subscribe(state => {
      this.filterCurrent = state.filter;
      this.pendingTotal = state.todos.filter(todo => !todo.isCompleted).length;
    });

  }

  changeFilter(filterNew: actions.filterTasks) {
    this.store.dispatch(actions.setFilter({filter: filterNew}));
  }

  removeAll() {
    this.store.dispatch(removeAllCompleted());
  }

}

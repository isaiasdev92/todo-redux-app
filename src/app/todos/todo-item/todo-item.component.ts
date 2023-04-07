import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoInput?: Todo;
  @ViewChild('inputEditing') inputEditing?: ElementRef<HTMLInputElement>;

  todoItemNew: Todo = new Todo("");
  chkCompleted: FormControl = new FormControl();
   txtInput: FormControl = new FormControl();
   editing: boolean = false;

   constructor(private store: Store<AppState>) {
   }

  ngOnInit(): void {
    this.todoItemNew = this.todoInput ?? new Todo("");

     this.chkCompleted = new FormControl(this.todoItemNew.isCompleted);
    this.txtInput = new FormControl(this.todoItemNew.text, Validators.required);


    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggleTask({id: this.todoItemNew.id ?? 0}));
    });


  }

  editar() {
    this.editing = true;
    this.txtInput.setValue(this.todoItemNew.text);

    setTimeout(() => {
      this.inputEditing?.nativeElement.select();
    }, 1);
  }

  editFinish() {
    this.editing = false;

    console.log(this.txtInput.invalid);
    console.log(this.txtInput.value);
    console.log(this.todoItemNew.text);

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todoItemNew.text) { return; }

    this.store.dispatch(
      actions.editTask({id: this.todoItemNew.id, text: this.txtInput.value})
    );
  }

  deleteTask() {
    this.store.dispatch(actions.deleteTask({id: this.todoItemNew.id}));
  }

}

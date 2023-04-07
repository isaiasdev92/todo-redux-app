import { createReducer, on } from "@ngrx/store";
import { crear, deleteTask, editTask, removeAllCompleted, toggleAll, toggleTask } from "./todo.actions";
import { Todo } from "./models/todo.model";


export const initialState: Todo[] = [
  new Todo("Tarea 1"),
  new Todo("Tarea 2"),
  new Todo("Tarea 3"),
  new Todo("Tarea 4"),
];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, {text}) => [...state, new Todo(text)]),

  on(deleteTask, (state, {id}) => state.filter(todo =>  todo.id != id)),

  on(toggleTask, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        var newTodo = structuredClone(todo);
        newTodo.isCompleted = !todo.isCompleted;
        return newTodo;
      } else {
        return todo;
      }
    });
  }),

  on(editTask, (state, {id, text}) => {
    return state.map(todo => {
      if (todo.id === id) {
        var newTodo = structuredClone(todo);
        newTodo.text = text;
        return newTodo;
      } else {
        return todo;
      }
    });
  }),

  on(toggleAll, (state, {isCompleted}) => {
    return state.map(todo => {
      var newTodo = structuredClone(todo);
      newTodo.isCompleted = isCompleted
      return newTodo;
    });
  }),

  on(removeAllCompleted, (state) => state.filter(todo =>  !todo.isCompleted)),

);

import { createAction, props } from '@ngrx/store';


export const crear = createAction(
  '[TODO] Crea TODO',
  props<{ text: string }>()
);


export const toggleTask = createAction(
  '[TODO] Toogle Task',
  props<{ id: number }>()
);

export const editTask = createAction(
  '[TODO] Edit Task',
  props<{ id: number, text: string }>()
);

export const deleteTask = createAction(
  '[TODO] Delete Task',
  props<{ id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle All Tasks',
  props<{ isCompleted: boolean}>()
);

export const removeAllCompleted = createAction(
  '[TODO] Remove All Completed Tasks'
);

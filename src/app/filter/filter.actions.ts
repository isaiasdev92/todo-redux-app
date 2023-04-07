import {createAction, props} from '@ngrx/store'


export type filterTasks = 'todos' | 'completados'| 'pendientes'

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: filterTasks}>()
  );

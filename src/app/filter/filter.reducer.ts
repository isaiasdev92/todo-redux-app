

import { createReducer, on } from '@ngrx/store';
import { filterTasks, setFilter, } from './filter.actions';

export const initialState: filterTasks = 'all' as filterTasks;

export const filterReducer = createReducer(initialState,
  on(setFilter, (_: filterTasks, { filter }) => filter),

);

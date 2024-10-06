import {
  ADD_TODO,
  EDIT_TODO,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_SERARCH_TERM,
} from "../types/actionsTypes";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SERARCH_TERM,
  payload: { searchTerm },
});

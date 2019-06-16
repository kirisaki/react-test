import { Action } from 'redux'

export enum Msg {
  AddTodo = 'ADD_TODO',
  DeleteTodo = 'DELETE_TODO'
}

export type AddTodoPayload = {
  content: string
}

interface AddTodoAction extends Action {
  type: Msg.AddTodo
  payload: AddTodoPayload
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => ({
  type: Msg.AddTodo,
  payload,
})

export type DeleteTodoPayload = {
  id: number
}

interface DeleteTodoAction extends Action {
  type: Msg.DeleteTodo
  payload: DeleteTodoPayload
}

export const deleteTodo = (payload: DeleteTodoPayload): DeleteTodoAction => ({
  type: Msg.DeleteTodo,
  payload,
})

export type TodoActions
  = AddTodoAction
  | DeleteTodoAction

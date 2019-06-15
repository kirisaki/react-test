import { Action } from 'redux'

export enum Msg {
  AddTodo = 'ADD_TODO',
  ChangeInput = 'CHANGE_INPUT'
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

export type TodoActions
  = AddTodoAction

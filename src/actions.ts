import { Action } from 'redux'

export enum Msg {
  AddTodo = 'ADD_TODO'
}

export type AddTodoPayload = {
  content: string
}

interface AddTodoAction extends Action {
  type: Msg.AddTodo
  payload: AddTodoPayload
}

export const addToDo = (payload: AddTodoPayload): AddTodoAction => ({
  type: Msg.AddTodo,
  payload,
})

export type TodoActions = AddTodoAction

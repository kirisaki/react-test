import { Msg, TodoActions } from './actions'

export interface TodoState {
  todos: TodoType[]
  serial: number
}

export type TodoType = {
  id: number
  content: string
}

const init: TodoState = ({
  todos: [],
  serial: 0,
})

export const reducer = (state: TodoState = init, action: TodoActions): TodoState => {
  switch (action.type) {
    case Msg.AddTodo:
      return {
        todos: [
          {
            id: state.serial,
            content: action.payload.content
          },
          ...state.todos
        ],
        serial: state.serial + 1,
      }
    case Msg.DeleteTodo:
      return {
        todos: state.todos.filter(x => x.id != action.payload.id),
        serial: state.serial
      }
    default:
      return state
  }
}

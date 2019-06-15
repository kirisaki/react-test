import { Msg, TodoActions } from './actions'
import { string } from 'prop-types';

export interface TodoState {
  todos: {
    id: number
    content: string
  }[]
  serial: number
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
          ...state.todos,
          {
            id: state.serial,
            content: action.payload.content
          },
        ],
        serial: state.serial + 1,
      }
    default:
      return state
  }
}

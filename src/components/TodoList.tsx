import * as React from "react"
import { connect } from 'react-redux'
import { TodoState, TodoType } from '../reducer'
import Todo from './Todo'

class TodoList extends React.Component<{state: TodoState}> {
  constructor(props: {state: TodoState}){
    super(props)
  }
  render() {
    return (
      <div>{this.props.state.todos.map(renderOne)}</div>
    )
  }
}

const renderOne = (todo: TodoType) => {
  return (
    <Todo key={todo.id} content={todo} />
  )
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(TodoList)

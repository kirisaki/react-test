import * as React from "react"
import { connect } from 'react-redux'
import { TodoType } from '../reducer'
import { deleteTodo } from "../actions";

interface Props {
  content: TodoType
  onDelete: (id: number) => void
}

class Todo extends React.Component<Props, {}> {
  onClickHandler = () => {
    this.props.onDelete(this.props.content.id)
  }
  render() {
    return (
      <div>
        <p>{this.props.content.content}</p>
        <button onClick={this.onClickHandler}>×</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    onDelete: (id: number) => {dispatch(deleteTodo({id}))}
  })
)(Todo)

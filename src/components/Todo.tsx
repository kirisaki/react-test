import * as React from "react"
import { connect } from 'react-redux'
import { TodoType } from '../reducer'

class Todo extends React.Component<{content: TodoType}, {}> {
  render() {
    return (
      <div>{this.props.content.content}</div>
    )
  }
}

export default connect(
  state => ({
    state
  })
)(Todo)

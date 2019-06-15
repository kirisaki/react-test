import * as React from "react"
import { connect } from 'react-redux'
import Input from './Input'
import TodoList from './TodoList'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Input />
        <TodoList />
      </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(App)

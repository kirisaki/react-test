import * as React from "react"
import { connect } from 'react-redux'
import Input from './Input'
import TodoList from './TodoList'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <h1 className="title">Todo List</h1>
        <Input />
        <TodoList />
      </main>
    )
  }
}

export default connect(
  state => ({
    state
  })
)(App)

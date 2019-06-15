import * as React from "react"
import { connect } from 'react-redux'
import Input from './Input'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <Input />
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

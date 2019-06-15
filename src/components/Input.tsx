import * as React from "react"
import { connect } from 'react-redux'
import { string } from "prop-types";

interface InputState {
  content: string
}

interface MessageInputEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

class Input extends React.Component<{}, InputState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      content: ''
    }
  }
  onClickHandler = () => {
    this.setState({content: ''})
  }
  onChangeHandler = (event: MessageInputEvent) => {
    this.setState({content: event.target.value})
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChangeHandler} value={this.state.content} />
        <button onClick={this.onClickHandler}>add</button>
        <div>{this.state.content}</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({})
)(Input)

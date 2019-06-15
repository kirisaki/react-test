import * as React from "react"
import { connect } from 'react-redux'
import { string } from "prop-types"
import { addTodo } from '../actions'

interface InputState {
  content: string
}

interface MessageInputEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

type Props = {
  onSubmit: (content: string) => void
}

class Input extends React.Component<Props, InputState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  onClickHandler = () => {
    this.props.onSubmit(this.state.content)
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
      </div>
    )
  }
}

export default connect(
  state => ({
    state
  }),
  dispatch => ({
    onSubmit: (content: string) => {dispatch(addTodo({content}))}
  })
)(Input)

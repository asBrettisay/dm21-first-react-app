import React, { Component } from 'react';

class LoginForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: '',
      inputText: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleClick() {
    this.setState({
      user: this.state.inputText
    })

    this.props.onLogin(this.state.inputText);
  }

  render() {
    console.log('LOGINFORM RENDERING');
    return (
      <div>
        <h1>Login here</h1>
        <h5>Currently logged in as: {this.state.user}</h5>
        <input onChange={this.handleChange} placeholder="Login Here"/>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default LoginForm
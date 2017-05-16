import React, { Component } from 'react';
import Child from './Child';
import LoginForm from './LoginForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props) {
    super(props)

    this.state = {
      user: '',
      chores: [
        'Laundry',
        'Dishes',
        'Vacuum'
      ]
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(user) {
    this.setState({
      user: user
    })
  }

  render() {
    console.log("APP RENDERING")
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        

        <Child title={this.state.user} list={this.state.chores}/>
        <LoginForm onLogin={this.handleLogin}/>

      </div>
    );
  }
}

export default App;

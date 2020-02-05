import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class LoginScreen extends Component {

  state = {
    newUser: {
      email: '',
      password: ''
    }
  }

  handleInputChange = event => {
    let value = event.target.value
    let item = event.target.name
    this.setState(prevState => {
      return {
          newUser: {...prevState.newUser, [item]: value}
      }
  })
  }

  handleClick = () => {
    this.props.handleLogin(this.state.newUser)
  }

  render() {
    return (
      <div>
        <form>
            <label>Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => this.handleInputChange(e)}
            />

          <label>Password</label>
            <input
              name="password"
              type="text"
              placeholder="Enter your password"
              onChange={(e) => this.handleInputChange(e)}
            />      

            <Link to='/viewbakes'>            
            <button type="submit" onClick={this.handleClick} >
                Login
            </button>
            </Link>
        </form> 
      </div>
    )
  }
}

export default LoginScreen
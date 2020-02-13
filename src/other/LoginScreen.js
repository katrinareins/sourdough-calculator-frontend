import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginHOC from '../other/LoginHOC';
import '../Styles.css';
import Footer from '../other/Footer'

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
      <div className='home-container'>

        <div className='home-login-form'>
          {/* <h1 className='home-title'>Absolute Baking Success</h1> */}
          <img className='home-logo' alt='' src={require('../images/Absolute BS logo-v6.png')}/>
          <h4 className='home-subtitle'>A naturally leavened bread ingredient calculator and a place to hold all your important baking notes</h4>
            <img className='home-pic' alt='' src={require('../images/3-pic-combo.png')}/>


          <form className='login-form'>
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                className='login-input'
                onChange={(e) => this.handleInputChange(e)}
              />
            <br></br>
              <Link to='/viewbakes'>            
              <button className='login-button' type="submit" onClick={this.handleClick} >
                  Login
              </button>
              </Link>
          </form> 
        
        </div>
      {/* <Footer /> */}
      </div>
    )
  }
}

export default LoginHOC(LoginScreen)
// export default LoginScreen
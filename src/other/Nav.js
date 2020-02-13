import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../Styles.css'

export class Nav extends Component {

    state = {
        redirectHome: false
    }

    handleClick = () => {
        // event.preventDefault()
        this.props.handleLogOut()
        this.setState({
            redirectHome: true
        })
    }   

    render() {
        console.log('props in nav bar', this.props)

        if (this.state.redirectHome === true){
            return <Redirect to='/' />
        }
        return (
            <div className='nav'>
                {
                    <div> 
                        <nav className=''>
                            <div>
                                <img className='nav-logo' alt='' src={require('../images/Absolute BS logo-v6.png')}/>

                                <Link to='/newBake'>
                                    <button className='nav-button' >CREATE NEW BAKE</button>
                                </Link>

                                <Link to='/viewbakes'>
                                    <button className='nav-button'>VIEW MY BAKES</button>
                                </Link>
                                <button className='nav-button'>LOGGED IN AS: {this.props.loggedInUser}</button>
                                <button className='nav-button' onClick={this.handleClick}>LOG OUT</button>
                            </div>
                        </nav>
                    </div>
                }
            </div>
        )
    }
}

export default Nav


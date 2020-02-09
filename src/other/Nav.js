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
            <div className='nav-container'>
                {
                    <div> 
                        <nav className='nav'>
                            <div>
                                <Link to='/'>
                                    <h3>Absolute Baking Success</h3>
                                </Link>

                                <Link to='/newBake'>
                                    <button className='nav-button' >Create new bake</button>
                                </Link>

                                <Link to='/viewbakes'>
                                    <button className='nav-button'>View my bakes</button>
                                </Link>
                                <button className='nav-button'>Logged in as: {this.props.loggedInUser}</button>
                                <button className='nav-button' onClick={this.handleClick}>Log out</button>
                            </div>
                        </nav>
                    </div>
                }
            </div>
        )
    }
}

export default Nav


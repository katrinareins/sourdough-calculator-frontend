import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export class Nav extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.handleLogOut()
    }   

    render() {
        console.log('props in nav bar', this.props)
        return (
            <div>
                {
                    (this.props.loggedInUser) ?   
                    <div> 
                        <nav className='nav-logged-in'>
                            <div>
                                <Link to='/'>
                                    <h3>Absolute Baking Success</h3>
                                </Link>

                                <Link to='/newBake'>
                                    <button>Create new bake</button>
                                </Link>

                                <Link to='/viewbakes'>
                                    <button>View my bakes</button>
                                </Link>

                                <button>Logged in as: {this.props.loggedInUser}</button>

                                <Link to='/'>
                                <button type="submit" onClick={this.handleClick}>Log out</button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                    :
                    <div>
                    <nav className='nav-logged-out'>
                        <Link to='/'>
                            <h3>Absolute Baking Success</h3>
                        </Link>
                    </nav>
                </div>
                }
            </div>
        )
    }
}

export default Nav


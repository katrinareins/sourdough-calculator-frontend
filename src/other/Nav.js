import React, { Component } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export class Nav extends Component {

    render() {
        return (
            <div>
                {
                    (this.props.loggedInBoolean === false) ?   
                        <div>
                            <nav className='nav-logged-out'>
                                <Link to='/'>
                                    <h3>Absolute Baking Success</h3>
                                </Link>
                            </nav>
                        </div>
                    :
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
                                <button>Log out</button>
                                </Link>
                            </div>
                        </nav>
                    </div>
                }
            </div>
        )
    }
}

export default Nav


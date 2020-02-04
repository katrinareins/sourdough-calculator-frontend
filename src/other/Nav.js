import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav(props) {

    return (
        <div>
            <nav className='nav'>

                <Link to='/'>
                    <h3>Absolute Baking Success</h3>
                </Link>

                <ul className='nav-links'>
                    <Link to='/newBake'>
                        <li>Create new bake</li>
                    </Link>

                    <Link to='/viewbakes'>
                        <li>View my bakes</li>
                    </Link>

                    <li>Logged in as:{props.loggedInUser} </li>
                </ul>

            </nav>
        </div>
    )
}

export default Nav;


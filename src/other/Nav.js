import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className='nav'>
                <h3>Absolute Baking Success</h3>
                <ul className='nav-links'>
                    <Link to='/newBake'>
                        <li>Create new bake</li>
                    </Link>
                    <Link to='/viewbakes'>
                        <li>View my bakes</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;


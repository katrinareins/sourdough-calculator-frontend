import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to='/login'>
                    <button>Click here to enter</button>
                </Link>
            </div>
        )
    }
}

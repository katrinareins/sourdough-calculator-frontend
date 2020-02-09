import React, { Component } from 'react'
import NewBakeContainer from '../newBake_page/NewBakeContainer'
import Nav from '../other/Nav'
import '../Styles.css'

export class NewBakeScreen extends Component {

    render() {
        return (
            <div>
                <Nav 
                    loggedInUser={this.props.email} 
                    handleLogOut={this.props.handleLogOut} />

                <NewBakeContainer handlePost={this.props.handlePost} userId={this.props.userId} />
            </div>
        )
    }
}

export default NewBakeScreen
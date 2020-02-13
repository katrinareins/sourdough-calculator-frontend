import React, { Component } from 'react'
import NewBakeContainer from '../newBake_page/NewBakeContainer'
import Nav from '../other/Nav'
import '../Styles.css'
import LoginHOC from '../other/LoginHOC';
import Footer from '../other/Footer'

export class NewBakeScreen extends Component {

    render() {
        return (
            <div>
                <Nav 
                    loggedInUser={this.props.email} 
                    handleLogOut={this.props.handleLogOut} />

                <NewBakeContainer handlePost={this.props.handlePost} userId={this.props.userId} />
                <Footer />
            </div>
        )
    }
}

// export default NewBakeScreen
export default LoginHOC(NewBakeScreen)
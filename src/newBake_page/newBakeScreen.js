import React, { Component } from 'react'
import NewBakeContainer from '../newBake_page/NewBakeContainer'

export class NewBakeScreen extends Component {

    render() {
        return (
            <div>
                <NewBakeContainer handlePost={this.props.handlePost} userId={this.props.userId} />
            </div>
        )
    }
}

export default NewBakeScreen
import React, { Component } from 'react'

export class NewBakeScreen extends Component {
    render() {
        return (
            <div>
                <newBakeContainer handlePost={this.props.handlePost} />
            </div>
        )
    }
}

export default NewBakeScreen
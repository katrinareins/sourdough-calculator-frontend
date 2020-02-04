import React, { Component } from 'react'

export class AddNotesScreen extends Component {
    render() {
        return (
            <div>
                <h1>Add notes to my bake</h1>
                <button>Add note</button>
                {/* <AddNotesScreen bakeId={this.props.bakeId} /> */}
            </div>
        )
    }
}

export default AddNotesScreen

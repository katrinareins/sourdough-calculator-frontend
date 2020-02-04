import React, { Component } from 'react'
import AddNotesContainer from './AddNotesContainer'

export class AddNotesScreen extends Component {
    
    render() {
        return (
            <div>
                <h1>Add notes to my bake</h1>
                <button>Add note</button>
                <AddNotesContainer bakeId={this.props.bakeId} handleNotePost={this.props.handleNotePost} />
            </div>
        )
    }
}

export default AddNotesScreen
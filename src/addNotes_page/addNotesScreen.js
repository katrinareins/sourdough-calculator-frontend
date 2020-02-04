import React, { Component } from 'react'
import AddNotesContainer from './AddNotesContainer'

export class AddNotesScreen extends Component {
    
    render() {
        console.log("these are the props in Add notes Screen, should be bake ID", this.props)
        return (
            <div>
                <h1>Add notes to my bake</h1>
                <button>Add note</button>
                <AddNotesContainer bakeId={this.props.bakeId} />
            </div>
        )
    }
}

export default AddNotesScreen
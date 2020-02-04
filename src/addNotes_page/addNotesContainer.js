import React, { Component } from 'react'
import AddNotesCard from './AddNotesCard'
import AddNotesForm from './AddNotesForm'

export class AddNotesContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            newNote: {
                bake_id: this.props.bakeId,
                 title: '',
                 content: ''
            } 
        }
    }

    // update state with inputs
    updateState = event => {
        let value = event.target.value
        let item = event.target.name
        this.setState(prevState => {
            return {
                newNote: {...prevState.newNote, [item]: value, bake_id: this.props.bakeId}
            }
        })
    }

    // handlesubmit function
    sendPostRequest = (e) => {
        e.preventDefault()
        console.log(this.state.newNote)
        let newNote = this.state.newNote
        this.props.handleNotePost(newNote)
    }

    render() {
        return (
            <div>
                <AddNotesForm updateState={this.updateState} sendPostRequest={this.sendPostRequest} />
            </div>
        )
    }
}

export default AddNotesContainer

import React, { Component } from 'react'
import AddNotesCard from './AddNotesCard'
import AddNotesForm from './AddNotesForm'

export class AddNotesContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            newNote: {
                id: this.props.bakeId,
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
                newNote: {...prevState.newNote, [item]: value}
            }
        }, () => console.log('state after user changes', this.state.newNote))
    }

    // handlesubmit function
    sendPostRequest = (e) => {
        e.preventDefault()
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

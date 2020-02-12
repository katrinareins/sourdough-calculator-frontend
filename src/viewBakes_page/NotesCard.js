import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {

    handleEditClick = () => {
        let id = this.props.note.id
        let title = this.props.note.title
        let content = this.props.note.content
        this.props.handleEditNoteClick(id, title, content)
    }

    handleDeleteClick = () => {
        this.props.deleteNote(this.props.note)
    }

    render() {
        console.log("THESE ARE PROPS IN NOTES CARD:", this.props)
        const { title, content } = this.props.note
        return (
            <div className='view-notes-div'>
                <h4 className='note-title'>{title}</h4>
                <p className='note-content'>{content}</p>
                <button className='edit-delete-note' onClick={this.handleEditClick}>Edit</button>
                <button className='edit-delete-note' onClick={this.handleDeleteClick}>Delete</button>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
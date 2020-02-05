import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {

    handleEditClick = () => {
        let id = this.props.note.id
        let title = this.props.note.title
        let content = this.props.note.content
        this.props.handleEditNoteClick(id, title, content)
    }

    handleDeleteClick = () => {
        this.props.deleteNote(this.props.note.id)
    }

    render() {
        const { title, content } = this.props.note
        return (
            <div>
                <h4>{title}</h4>
                <p>{content}</p>
                <button onClick={this.handleEditClick}>Edit</button>
                <button onClick={this.handleDeleteClick}>Delete</button>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
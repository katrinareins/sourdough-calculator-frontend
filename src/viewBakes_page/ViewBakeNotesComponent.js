import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {
    render() {
        const { title, content } = this.props.note
        return (
            <div>
                <p>{title}</p>
                <p>{content}</p>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
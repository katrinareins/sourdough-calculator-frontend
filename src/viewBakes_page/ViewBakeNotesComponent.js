import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {
    render() {
        const { title, content } = this.props.note
        return (
            <div>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
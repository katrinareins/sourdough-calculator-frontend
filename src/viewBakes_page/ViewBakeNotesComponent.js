import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {
    render() {
        console.log('props in note component', this.props) 
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
import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {

    handleClick = () => {
        console.log('edit clicked')
    }

    render() {
        const { title, content } = this.props.note
        return (
            <div>
                <h4>{title}</h4>
                <p>{content}</p>
                <button onClick={this.handleClick}>Edit</button>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
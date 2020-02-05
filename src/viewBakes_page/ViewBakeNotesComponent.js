import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {
    render() {
        console.log('props in note component', this.props) 
        return (
            <div>
                <p>these are supposed to be notes</p>
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
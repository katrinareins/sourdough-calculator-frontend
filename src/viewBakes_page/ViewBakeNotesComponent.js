import React, { Component } from 'react'

export class ViewBakeNotesComponent extends Component {
    render() {
        console.log('props in note component', this.props) 
        return (
            <div>
                {/* <p>{this.props.notes}</p> */}
            </div>
        )
    }
}

export default ViewBakeNotesComponent 
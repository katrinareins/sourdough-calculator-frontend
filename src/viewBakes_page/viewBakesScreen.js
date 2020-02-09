import React, { Component } from 'react'
import ViewBakesContainer from './ViewBakesContainer'
import '../BakeCards.css'
import Nav from '../other/Nav'

export class ViewBakesScreen extends Component {
    

    render() {
        return (
            <div className='.main-container'>

                <Nav 
                loggedInUser={this.props.email} 
                handleLogOut={this.props.handleLogOut} />
                
                <ViewBakesContainer 
                userId={this.props.userId}
                bakes={this.props.bakes} 
                handleDelete={this.props.handleDelete} 
                handleNotePost={this.props.handleNotePost}
                deleteNote={this.props.deleteNote}
                notePatchRequest={this.props.notePatchRequest}
                loggedIn={this.props.loggedIn}
                />
            
            </div>
        )
    }
}

export default ViewBakesScreen
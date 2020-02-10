import ViewBakesComponent from './ViewBakesComponent'
import React, { Component } from 'react'

export class ViewBakesContainer extends Component { 

    mapThroughBakes = () => {
        return this.props.bakes.map((bake, index) => {
            return <ViewBakesComponent 
            bake={bake} 
            key={index} 
            renderNotes={this.renderNotes} 
            handleDelete={this.props.handleDelete} 
            handleNotePost={this.props.handleNotePost} 
            deleteNote={this.props.deleteNote}
            notePatchRequest={this.props.notePatchRequest}
            handleRatingPatch={this.props.handleRatingPatch}
            />
        } )
    }

    render() {
        console.log('props in container', this.props.bakes) 
        return (
            <div className='main-container-view-bakes'>
                {this.mapThroughBakes()} 
            </div>
        )
    }
}

export default ViewBakesContainer
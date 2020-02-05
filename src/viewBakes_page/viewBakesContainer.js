import ViewBakesComponent from './ViewBakesComponent'
import ViewBakeNotesComponent from './ViewBakeNotesComponent'
import React, { Component } from 'react'

export class ViewBakesContainer extends Component { 

    userMap = () => {
        return this.props.bakes.map((bake, index) => {
            return <ViewBakesComponent bake={bake} key={index} renderNotes={this.renderNotes} />
        } )
    }

    // renderNotes = (bakeID) => {
    //     console.log('trying to add notes', bakeID)
    //     // return this.props.bakes.id.filter(bakeID)
    //     this.props.bakes.forEach(bake => {
    //         if(bake.id === bakeID){
    //             return bake.notes
    //         } 
            // else {
            //     console.log('no notes on this bake!')
            // }
    //     })
    // }

    render() {
        console.log('props in container', this.props.bakes) 
        return (
            <div>
                {this.userMap()} 
            </div>
        )
    }
}

export default ViewBakesContainer
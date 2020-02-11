import ViewBakesComponent from './ViewBakesComponent'
import React, { Component } from 'react'

export class ViewBakesContainer extends Component { 

    // for sorting --> take in param. If the param is nothing, map cards as normal. 
    // if the param is date - check each bake and sort by date
    // if the param is rating - check each bake and sort by rating

    mapThroughBakes = (selection) => {
        if (selection === 'none'){
            // map over sorted array
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

        } else if (selection === 'date'){

        } else if (selection === 'rating'){
            console.log('prompted to sort by rating! These are the bake props:', this.props.bakes)
            const sortedArray = this.props.bakes.slice().sort(function(a, b) {
                if(a.rating === null){
                    return 1;
                } else if (b.rating === null) {
                    return -1;
                } else {
                    return b.rating - a.rating;
                }
            });
            console.log('SORTED ARRAY', sortedArray)

            return sortedArray.map((bake, index) => {
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

    }

    handleFilter = (event) => {
        console.log('filter selection', event.target.value)
        let value = event.target.value
        if(value === 'date'){
            this.mapThroughBakes('date')
        }else if (value === 'rating'){
            this.mapThroughBakes('rating')
        }
    }

    render() {
        console.log('props in container', this.props.bakes) 
        return (
            <div>
                <div>
                    <label ></label>
                        <select onChange={this.handleFilter} name="rating">
                        <option selected >Filter by date or ranking</option>
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                        </select>
                </div>

                <div className='main-container-view-bakes'>
                    {this.mapThroughBakes('none')} 
                </div>

            </div>
        )
    }
}

export default ViewBakesContainer
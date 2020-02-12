import ViewBakesComponent from './ViewBakesComponent'
import React, { Component } from 'react'

export class ViewBakesContainer extends Component { 

    constructor(props) {
        super(props)
    
        this.state = {
             allBakes: [],
             filter: ''
        }
    }

    // for sorting --> take in param. If the param is nothing, map cards as normal. 
    // if the param is date - check each bake and sort by date
    // if the param is rating - check each bake and sort by rating

    handleDeleteBake = (bakeD) => {
        this.props.handleDelete(bakeD)
        this.setState(prevState => {
            return {
              allBakes: prevState.allBakes.filter(bake => bake.id!=bakeD.id)
            }
          })
    }

    setCardState = (selection) => {
        if (selection === 'date'){
            // console.log('prompted to sort by date! These are the bake props:', this.props.bakes)
            const sortedArrayDate = this.props.bakes.slice().sort(function(a, b){
                return new Date(b.date) - new Date(a.date);
            })
            // console.log('SORTED ARRAY BY DATE', sortedArrayDate)
            this.setState({
                allBakes: sortedArrayDate,
                filter: 'date'
            })
        } else if (selection === 'rating'){
            // console.log('prompted to sort by rating! These are the bake props:', this.props.bakes)
            const sortedArrayRating = this.props.bakes.slice().sort(function(a, b) {
                if(a.rating === null){
                    return 1;
                } else if (b.rating === null) {
                    return -1;
                } else {
                    return b.rating - a.rating;
                }
            });
            // console.log('SORTED ARRAY BY RATING', sortedArrayRating)
            this.setState({
                allBakes: sortedArrayRating,
                filter: 'rating'
            })
        } else if (selection === ''){
            // this.state.allBakes.push(this.props.newBake)
            // console.log("BAKES ON TRYING TO LAST LATEST ONE???___----->", this.state.allBakes)
            this.setState({
                allBakes: this.props.bakes,
                filter: ''
            })
            // console.log('state on null', this.state)
        }
    }

    renderCards = () => {
        return this.state.allBakes.map((bake, index) => {
            return <ViewBakesComponent 
            bake={bake} 
            key={index} 
            renderNotes={this.renderNotes} 
            handleDeleteBake={this.handleDeleteBake} 
            handleNotePost={this.props.handleNotePost} 
            deleteNote={this.props.deleteNote}
            notePatchRequest={this.props.notePatchRequest}
            handleRatingPatch={this.props.handleRatingPatch}
            />
        } )
    }

    componentDidMount(){
        console.log('COMPONENT DID MOUNT CALLED')
        this.setCardState('')
    }

    handleFilter = (event) => {
        this.setCardState(event.target.value)
    }

    shouldComponentUpdate() {
        // return this.state.allBakes != nextState.allBakes;
        console.log("IS THIS WORKING %^YUIUYTYU$%#$%")
        // this.setState({
        //     allBakes: this.props.bakes
        // })
        // this.state.allBakes.push(this.props.bakes[-1])
        return true;
    }
    
    render() {
        console.log('props in container', this.props.bakes) 
        return (
            <div>
                <div>
                    <label ></label>
                        <select onChange={this.handleFilter} name="rating">
                        <option selected >Filter by date or rating</option>
                        <option value="date">Date</option>
                        <option value="rating">Rating</option>
                        </select>
                </div>

                <div className='main-container-view-bakes'>
                    {this.renderCards()} 
                </div>

            </div>
        )
    }
}

export default ViewBakesContainer
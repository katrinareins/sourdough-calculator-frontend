import React, { Component } from 'react'
import ViewBakeNotesComponent from './NotesCard';
import AddNotesForm from './AddNotesForm';
import EditNotesComponent from './EditNotesForm';
import star from '../images/star.png'


export class ViewBakesComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            loggedIn: true,
            viewNotes: false,
            showPopup: false,
            // rating: '',
            addNotes: false,
            newNote: {
                bake_id: this.props.bake.id,
                 title: '',
                 content: ''
            },
            editing: false,
            editNote: {
                id: '',
                title: '',
                content: ''
            }
        }
    }

    editNoteState = e => {
        console.log('is this editing', e.target.value)
        let value = e.target.value
        let item = e.target.name
        this.setState(prevState => {
          return {
              editNote: {...prevState.editNote, [item]: value}
          }
      })
    }

    sendPatchRequest = () => {
        this.setState({
            editing: false
        })
        this.props.notePatchRequest(this.state.editNote)
    }

    // update state with inputs
    updateState = event => {
        let value = event.target.value
        let item = event.target.name
        this.setState(prevState => {
            return {
                newNote: {...prevState.newNote, [item]: value, bake_id: this.props.bake.id}
            }
        })
    }

    // handlesubmit function
    sendPostRequest = () => {
        let newNote = this.state.newNote
        this.props.handleNotePost(newNote)
    }

    handleAddNoteClick = () => {
        this.setState(prevState => {
            return {addNotes: !prevState.addNotes}
          })
    }

    handleViewNotesClick = () => {
        this.setState(prevState => {
            return {viewNotes: !prevState.viewNotes}
          })
    }

    handleDeleteClick = () => {
        console.log('delete bake', this.props.bake)
        this.props.handleDeleteBake(this.props.bake)
        this.togglePopup()
    }

    mapNotes = () => {
        return this.props.bake.notes.map((note, index) => {
            return <ViewBakeNotesComponent note={note} key={index} deleteNote={this.props.deleteNote} handleEditNoteClick={this.handleEditNoteClick} />
        })
    }

    showNoteForm = () => {
        return <AddNotesForm updateState={this.updateState} sendPostRequest={this.sendPostRequest} />
    }

    handleEditNoteClick = (id, title, content) => {
        this.setState(prevState => {
            return {
                editing: true,
                editNote: {...prevState.editNote, id: id, title: title, content: content}
            }
          })
    }

    showEditNoteForm = () => {
        return < EditNotesComponent noteContent={this.state.editNote} editNoteState={this.editNoteState} sendPatchRequest={this.sendPatchRequest} />
    }

    handleRatingSelection = (event) => {
        let bakeID = this.props.bake.id
        let rating = event.target.value
        this.props.handleRatingPatch(bakeID, rating)
    }

    showPopup() {  
        this.togglePopup();  
    }  

    togglePopup = () => {
        this.setState(prevState => {
            return {showPopup: !prevState.showPopup}
          })
    }

    render() {
        console.log('THESE ARE PROPS IN VIEW BAKE COMPONENT: ', this.props)
        const { name, rating, hydration, total_flour_g, salt_p, leaven_p, notes, date } = this.props.bake

        const hasNotes = notes.length > 0 

        return (
            <div className='bake-card'>

                <div className='bake-card-img-div'>
                    <img className='bake-card-img' alt='' src={require('../images/23257.jpeg')} /> 
                    <img className='bake-card-img' alt='' src={require('../images/23258.jpeg')} />
                </div>

                <div className='bake-card-info'>
                        <h3>{name}</h3>
                        <p>Date: {date}</p>
                        <p>Rating: {rating}</p> 

                            <div className='popup-sections'>
                                <h4 className='popup-titles'>Baker's Percentage and Total Flour</h4>
                                <p>Total flour: 100%</p>
                                <p>Hydration: {hydration}%</p>
                                <p>Salt: {salt_p}%</p>
                                <p>Leaven: {leaven_p}%</p>
                            </div>
                         
                        <button className='buttons-cards' onClick={this.togglePopup} >Edit bake</button>

                    <div >
                        {this.state.showPopup ? 
                            <div className='modal'> 

                                <div className="popup-sections">
                                    <h4 className='popup-titles'>Rating</h4>
                                    <select onChange={this.handleRatingSelection} name="rating"> 
                                    <option selected >Rate this bake</option>
                                    <option value="5">*****</option>
                                    <option value="4">****</option>
                                    <option value="3">***</option>
                                    <option value="2">**</option>
                                    <option value="1">*</option>
                                    </select>
                                </div>
                            
                                <div className='popup-sections'>
                                    <h4 className='popup-titles'>Notes</h4>
                                        {hasNotes ? <button className={'buttons-cards'} onClick={this.handleViewNotesClick}>View / Hide Notes +</button>
                                        : null}
                                    
                                        <button className='buttons-cards' onClick={this.handleAddNoteClick}>Add note</button>
                                        
                                        {this.state.viewNotes ? this.mapNotes() : null}
                                        {this.state.addNotes ? this.showNoteForm() : null}
                                        {this.state.editing ? this.showEditNoteForm() : null}
                                    <div>
                                    </div>

                                </div>

                                <div className='save-or-delete '>
                                    <button className='save-button' onClick={this.togglePopup}>Save</button> 
                                    <button className='delete-button' onClick={this.handleDeleteClick}>Delete</button>
                                </div>

                            </div>

                        : null}

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewBakesComponent
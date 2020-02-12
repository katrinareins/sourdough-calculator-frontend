import React, { Component } from 'react'
import ViewBakeNotesComponent from './NotesCard';
import AddNotesForm from './AddNotesForm';
import EditNotesComponent from './EditNotesForm';
// import UploadImage from './UploadImage';


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
        // this.setState({  
        //      showPopup: true 
        // }, () => console.log("STATE WHEN TRYING TO SHOW POPUP: ", this.state.showPopup));  
    }  

    // hidePopup() {
    //     console.log("STATE WHEN TRYING TO CLOSE POPUP: ", this.state.showPopup)
    //     this.setState({  
    //         showPopup: false 
    //    });  
    // }

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
            <div className={this.state.showPopup ? 'modal' : 'bake-card'}>

                <div className='bake-card-img-div'>
                    <img className='bake-card-img' alt='' src={require('../images/23257.jpeg')} /> 
                    <img className='bake-card-img' alt='' src={require('../images/23258.jpeg')} />
                </div>

                <div className='bake-card-info'>
                        <h3>{name}</h3>
                        <p>Date: {date}</p>
                        <p>Rating: {rating}</p> 

                    <div>
                        <div className="rating-select">
                            <label ></label>
                            <select onChange={this.handleRatingSelection} name="rating"> 
                            <option selected >Rate this bake</option>
                            <option value="5">*****</option>
                            <option value="4">****</option>
                            <option value="3">***</option>
                            <option value="2">**</option>
                            <option value="1">*</option>
                            </select>
                        </div>
                        <div>
                            <p>Hydration: {hydration}</p>
                            <p>Total flour (g): {total_flour_g}</p>
                            <p>Salt (p): {salt_p}</p>
                            <p>Leaven (p): {leaven_p}</p>
                        </div>
                    
                        
                        <div>
                            {hasNotes ? <button className={'buttons-cards'} onClick={this.handleViewNotesClick}>View notes +</button>
                            : null}
                        </div>

                        <div>
                            {this.state.viewNotes ? this.mapNotes() : null}
                        </div>

                        <div>
                            <button className='buttons-cards' onClick={this.handleAddNoteClick}>Add note</button>
                        </div> 

                        <div>
                            {this.state.addNotes ? this.showNoteForm() : null}
                        </div>

                        <div>
                            {this.state.editing ? this.showEditNoteForm() : null}
                        </div>

                        <div>
                            {this.state.showPopup ? <button onClick={this.togglePopup}>Close</button> : null}
                        </div>

                        <div>
                            <button className='delete-button' onClick={this.handleDeleteClick}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBakesComponent
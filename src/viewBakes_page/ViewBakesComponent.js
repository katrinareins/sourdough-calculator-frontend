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

    handleClick = () => {
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


    render() {
        console.log('THESE ARE PROPS IN VIEW BAKE COMPONENT: ', this.props)
        const { name, rating, hydration, total_flour_g, salt_p, leaven_p, notes, date } = this.props.bake

        const hasNotes = notes.length > 0

        return (
            <div className='bake-card'>

                    <div>
                        <h3>{name}</h3>
                        <p>Date: {date}</p>
                        <p>Rating: {rating}</p>

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

                        <p>Hydration: {hydration}</p>
                        <p>Total flour (g): {total_flour_g}</p>
                        <p>Salt (p): {salt_p}</p>
                        <p>Leaven (p): {leaven_p}</p>
                        <img alt=''  />
                    </div>
                    
                    <div>
                        {hasNotes ? <button className='buttons-cards' onClick={this.handleClick}>View/Hide notes +</button>
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

                    {/* <div>
                        <UploadImage bake={this.props.bake}/>
                    </div> */}

                    <div>
                        <button className='buttons-cards' onClick={this.handleDeleteClick}>Delete</button>
                    </div>

            
            </div>
        )
    }
}

export default ViewBakesComponent
import React, { Component } from 'react'
import ViewBakeNotesComponent from './ViewBakeNotesComponent';
import AddNotesContainer from './AddNotesContainer';
import EditNotesComponent from './EditNotesComponent'

export class ViewBakesComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            viewNotes: false,
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
        console.log('is this editing', e)
    }

    sendPatchRequest = () => {
        this.setState({
            editing: false
        })

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
    sendPostRequest = (e) => {
        e.preventDefault()
        console.log(this.state.newNote)
        let newNote = this.state.newNote
        this.props.handleNotePost(newNote)
    }

    // send up bake id and create function 
    handleAddNoteClick = () => {
        console.log('add note clicked')
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
        console.log('delete bake', this.props.bake.id)
        this.props.handleDelete(this.props.bake.id)
    }

    mapNotes = () => {
        return this.props.bake.notes.map((note, index) => {
            return <ViewBakeNotesComponent note={note} key={index} deleteNote={this.props.deleteNote} handleEditNoteClick={this.handleEditNoteClick} />
        })
    }

    showNoteForm = () => {
        return <AddNotesContainer updateState={this.updateState} sendPostRequest={this.sendPostRequest} />
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
        console.log('show edit note form clicked')
        return < EditNotesComponent noteContent={this.state.editNote} sendPatchRequest={this.sendPatchRequest} />
    }

    render() {
        const { name, rating, hydration, total_flour_g, salt_p, leaven_p, notes } = this.props.bake

        const hasNotes = notes.length > 0

        return (
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>Hydration: {hydration}</p>
                    <p>Rating: {rating}</p>
                    <p>Total flour (g): {total_flour_g}</p>
                    <p>Salt (p): {salt_p}</p>
                    <p>Leaven (p): {leaven_p}</p>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
                
                <div>
                    {hasNotes ? <button onClick={this.handleClick}>View notes +</button>
                    : null}
                </div>

                <div>
                    {this.state.viewNotes ? this.mapNotes() : null}
                </div>

                <div>
                    <button onClick={this.handleAddNoteClick}>Add note</button>
                </div>

                <div>
                    {this.state.addNotes ? this.showNoteForm() : null}
                </div>

                <div>
                    {this.state.editing ? this.showEditNoteForm() : null}
                </div>
            </div>
        )
    }
}

export default ViewBakesComponent


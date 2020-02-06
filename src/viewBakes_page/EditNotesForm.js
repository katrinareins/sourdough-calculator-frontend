import React, { Component } from 'react'

export class EditNotesComponent extends Component {

    handleClick = e => {
        e.preventDefault();
        this.props.sendPatchRequest()
    }

    render() {
        console.log('edit note props: ', this.props)
        const { title, content } = this.props.noteContent
        return (
            <div>
                <form>
                    <label>Edit Note</label>
                    <input type='text' name='title' value={title} onChange={e => this.props.editNoteState(e)}></input>
                    <input type='textarea' name='content' value={content}onChange={e => this.props.editNoteState(e)}></input>
                    <button type='submit' onClick={this.handleClick}>Save</button>
                </form>
            </div>
        )
    }
}

export default EditNotesComponent
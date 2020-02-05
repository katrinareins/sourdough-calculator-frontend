import React, { Component } from 'react'

export class EditNotesComponent extends Component {
    render() {
        console.log('edit note props: ', this.props)
        const { title, content } = this.props.noteContent
        return (
            <div>
                <form>
                    <label>Edit Note</label>
                    <input type='text' name='title' placeholder="Note Title" value={title} onChange={e => this.props.editNoteState(e)}></input>
                    <input type='textarea' name='content' placeholder="Note Content" value={content}onChange={e => this.props.editNoteState(e)}></input>
                    <button type='submit' onClick={this.props.sendPatchRequest}>Save</button>
                </form>
            </div>
        )
    }
}

export default EditNotesComponent
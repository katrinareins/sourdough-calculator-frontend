import React, { Component } from 'react'

export class EditNotesComponent extends Component {
    render() {
        console.log('edit note props: ', this.props)
        return (
            <div>
                <form>
                    <label>Edit Note</label>
                    <input type='text' name='title' placeholder="Note Title" onChange={e => this.props.updateState(e)} ></input>
                    <input type='textarea' name='content' placeholder="Note Content" onChange={e => this.props.updateState(e)} ></input>
                    <button type='submit'>Save</button>
                </form>
            </div>
        )
    }
}

export default EditNotesComponent

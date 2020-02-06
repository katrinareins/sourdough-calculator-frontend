import React, { Component } from 'react'

export class AddNotesContainer extends Component {

    render() {
        return (
            <div>
                <form>
                <label>New Note</label>
                <input type='text' name='title' placeholder="Note Title" onChange={e => this.props.updateState(e)} ></input>
                <input type='textarea' name='content' placeholder="Note Content" onChange={e => this.props.updateState(e)} ></input>
                <button type='submit' onClick={this.props.sendPostRequest}>Save note</button>
            </form>
        </div>
        )
    }
}

export default AddNotesContainer

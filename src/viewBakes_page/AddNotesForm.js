import React, { Component } from 'react'

export class AddNotesContainer extends Component {

    state = {
        showNotes: true
    }

    handleClick = () => {
        this.setState(prevState => {
            return {showNotes: !prevState.showNotes}
          })
          this.props.sendPostRequest()
    }

    render() {
        return (
            <div>
                {this.state.showNotes ? 
                <form>
                    <label>New Note</label>
                    <input type='text' name='title' placeholder="Note Title" onChange={e => this.props.updateState(e)} ></input>
                    <input type='textarea' name='content' placeholder="Note Content" onChange={e => this.props.updateState(e)} ></input>
                    <button type='submit' onClick={this.handleClick}>Save note</button>
                </form>
                :null}
            </div>
        )
    }
}

export default AddNotesContainer

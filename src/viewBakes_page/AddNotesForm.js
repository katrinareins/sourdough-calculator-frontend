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
                    <input className="w3-input w3-border w3-round" type='text' name='title' placeholder="Note Title" onChange={e => this.props.updateState(e)} ></input>
                    <input className="w3-input w3-border w3-round" type='textarea' name='content' placeholder="Note Content" onChange={e => this.props.updateState(e)} ></input>
                    <button className='buttons-cards' type='submit' onClick={this.handleClick}>Save note</button>
                </form>
                :null}
            </div>
        )
    }
}

export default AddNotesContainer

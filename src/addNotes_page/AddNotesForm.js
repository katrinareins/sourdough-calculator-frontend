import React from 'react'

export default function AddNotesForm(props) {

    const handleSubmit = () => {
        console.log("button clicked")
    }

    return (
        <div>
            <form>
                <label>New Note</label>
                <input type='text' name='title' placeholder="Note Title" onChange={props.updateState(e)} ></input>
                <input type='textarea' name='content' placeholder="Note Title" onChange={props.updateState(e)} ></input>
                <button type='submit' onClick={handleSubmit} ></button>
            </form>
        </div>
    )
}

import React from 'react'
import '../Styles.css';

export default function AddNotesForm(props) {

    return (
        <div>
            <form>
                <label>New Note</label>
                <input type='text' name='title' placeholder="Note Title" onChange={e => props.updateState(e)} ></input>
                <input type='textarea' name='content' placeholder="Note Content" onChange={e => props.updateState(e)} ></input>
                <button className='button' type='submit' onClick={props.sendPostRequest}>Save note</button>
            </form>
        </div>
    )
}

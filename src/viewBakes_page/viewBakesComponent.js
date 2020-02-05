import React, { Component } from 'react'
import ViewBakeNotesComponent from './ViewBakeNotesComponent'

export class ViewBakesComponent extends Component {

    state = {
        viewNotes: false
    }

    handleClick = () => {
        this.setState({
            viewNotes: true
        })
    }

    handleDeleteClick = () => {
        console.log('delete bake', this.props.bake.id)
    }

    mapNotes = () => {
        return this.props.bake.notes.map((note, index) => {
            return <ViewBakeNotesComponent note={note} key={index} />
        })
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
            </div>
        )
    }
}

export default ViewBakesComponent
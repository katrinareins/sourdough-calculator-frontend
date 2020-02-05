import React, { Component } from 'react'

export class ViewBakesComponent extends Component {

    handleClick = () => {
        console.log('click to view notes')
        this.props.renderNotes(this.props.bake.id)
    }

    handleDeleteClick = () => {
        console.log('delete bake', this.props.bake.id)
    }

    render() {
        const { name, rating, hydration, total_flour_g, salt_p, leaven_p } = this.props.bake
        return (
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>Hydration: {hydration}</p>
                    <p>Rating: {rating}</p>
                    <p>Total flour (g): {total_flour_g}</p>
                    <p>Salt (p): {salt_p}</p>
                    <p>Leaven (p): {leaven_p}</p>
                    <button onClick={this.handleClick}>View notes +</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        )
    }
}

export default ViewBakesComponent
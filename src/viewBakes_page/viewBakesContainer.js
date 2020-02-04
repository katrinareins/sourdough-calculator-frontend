import ViewBakesComponent from './ViewBakesComponent'
import React, { Component } from 'react'

export class ViewBakesContainer extends Component {

    userMap = () => {
        return this.props.bakes.map((bake, index) => {
            return <ViewBakesComponent bake={bake} key={index} />
        } )
    }



    render() {
        console.log('props in container', this.props.bakes)
        return (
            <div>
                {this.userMap}
            </div>
        )
    }
}

export default ViewBakesContainer


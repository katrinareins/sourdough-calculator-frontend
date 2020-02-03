import React from 'react'
import ViewBakesComponent from './ViewBakesComponent'

import React, { Component } from 'react'

export class ViewBakesContainer extends Component {

    userMap = () => {
        return this.props.userData.map((user, index) => {
            return <ViewBakesComponent user={user} key={index} />
        } )
    }

    render() {
        return (
            <div>
                {this.userMap()}
            </div>
        )
    }
}

export default ViewBakesContainer


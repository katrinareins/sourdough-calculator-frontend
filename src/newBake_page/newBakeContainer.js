import React, { Component } from 'react'
import NewBakeComponent from './NewBakeComponent'

export default class NewBakeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return (
            <div>
                <NewBakeComponent />
            </div>
        )
    }
}

// this.props.handlePost

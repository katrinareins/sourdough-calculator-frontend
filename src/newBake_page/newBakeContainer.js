import React, { Component } from 'react'
import NewBakeComponent from './NewBakeComponent'

export default class NewBakeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: this.props.userId,
            total_flour_g: '',
            total_flour_p: '',
            water_g: '',
            water_p: '',
            salt_g: '',
            salt_p: '',
            leaven_g: '',
            leaven_p: '',
            hydration: '',
            rating: '',
            name: '',
            date: this.props.date
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

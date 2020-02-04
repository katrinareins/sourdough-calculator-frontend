import React, { Component } from 'react'
import ViewBakesContainer from './ViewBakesContainer'

export class ViewBakesScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userData: []
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:3000/users/${this.props.userId}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('inside component did mount', data)
             this.setState({
                userData: data
            })
            console.log('right after return', this.state)
        })
    }

    render() {
        return (
            <div>
                <ViewBakesContainer userId={this.props.userId} userDetails={this.state}/>
            </div>
        )
    }
}

export default ViewBakesScreen
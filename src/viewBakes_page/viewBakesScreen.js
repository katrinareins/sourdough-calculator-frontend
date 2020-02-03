import React, { Component } from 'react'
import ViewBakesContainer from './ViewBakesContainer'

export class ViewBakesScreen extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userData: {}
        }
    }
    

    componentDidMount = () => {
        fetch(`http://localhost:3000/users/${this.props.userId}`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                userData: data
            })
        })
    }

    render() {
        return (
            <div>
                <ViewBakesContainer userId={this.props.userId} userData={this.state.userData} />
            </div>
        )
    }
}

export default ViewBakesScreen
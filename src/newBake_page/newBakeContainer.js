import React, { Component } from 'react'
import NewBakeComponent from './NewBakeComponent'

export default class NewBakeContainer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newBake: {
                user_id: this.props.userId,
                total_flour_g: '',
                total_flour_p: 100,
                water_g: '',
                water_p: '',
                salt_g: '',
                salt_p: '',
                leaven_g: '',
                leaven_p: '',
                hydration: '',
                rating: '',
                name: '',
                date: '2020/02/01'
            }
        }
    }

    updateState = event => {
        let value = event.target.value
        let item = event.target.name
        this.setState(prevState => {
            return {
                newBake: {...prevState.newBake, [item]: value}
            }
        }, () => console.log('state after user changes', this.state.newBake))
    }

    sendPostRequest = () => {
        let newBake = this.state.newBake
        this.props.handlePost(newBake)
    }

    render(){
        return (
            <div>
                <NewBakeComponent updateState={this.updateState} sendPostRequest={this.sendPostRequest} />
            </div>
        )
    }
}

// this.props.handlePost

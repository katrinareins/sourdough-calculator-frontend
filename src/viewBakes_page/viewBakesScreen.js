import React, { Component } from 'react'
import ViewBakesContainer from './ViewBakesContainer'

export class ViewBakesScreen extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          userData: []
    //     }
    // }

    // componentDidMount = () => {
    //     fetch(`http://localhost:3000/users/${this.props.userId}`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log('data from fetch request in view bakes screen', data)
    //          this.setState({
    //             userData: data
    //         })
    //         console.log('after state update in view bakes screen', this.state)
    //     })
    // }

    render() {
        return (
            <div>
                <ViewBakesContainer userId={this.props.userId}
                bakes={this.props.bakes} handleDelete={this.props.handleDelete} handleNotePost={this.props.handleNotePost}
                //  bakes={this.state.userData.bakes}
                 />
            </div>
        )
    }
}

export default ViewBakesScreen
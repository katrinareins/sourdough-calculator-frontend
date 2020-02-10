import React, { Component } from 'react';
import NewBakeComponent from './NewBakeComponent';
// import UploadImage from '../viewBakes_page/UploadImage'

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
                date: ''
            }
        }
    }

    getTodaysDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        } 
        if (mm < 10) {
            mm = '0' + mm;
        } 
        let todayFormatted = dd + '/' + mm + '/' + yyyy;

        this.setState(prevState => {
            return {
                newBake: {...prevState.newBake, date: todayFormatted}
            }
        })
    }

    // 
    calculate = (percentage, totalFlour) => {

        // return (100 * partialValue) / totalValue;
     } 

    updateState = event => {
        let value = event.target.value
        let item = event.target.name
        this.setState(prevState => {
            return {
                newBake: {...prevState.newBake, [item]: value}
            }
        })
    }

    sendPostRequest = () => {
        let newBake = this.state.newBake
        this.props.handlePost(newBake)
    }

    render(){
        return (
            <div>
                <NewBakeComponent updateState={this.updateState} sendPostRequest={this.sendPostRequest} getTodaysDate={this.getTodaysDate} calculate={this.calculate} newBake={this.state.newBake} />
            </div>
        )
    }
}
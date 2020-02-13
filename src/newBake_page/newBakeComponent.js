import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../Styles.css';

export class newBakeComponent extends Component {

    state = {
        goToBakes: false
    }

    handleChange = (event) => {
        this.props.updateState(event) 
        this.props.getTodaysDate()
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.sendPostRequest()

        this.setState({
            goToBakes: true
        })
    }

    render() {
        
        if (this.state.goToBakes === true){
            return <Redirect to='/viewbakes' />
        }
        console.log('props in new bake page', this.props.newBake)
        const { salt_g, leaven_g, total_flour_g, water_p, water_g } = this.props.newBake
        
        return (
            <div className='new-bake-container'>

                    <div className='new-bake-img-container'>
                        <img className='new-bake-img' alt='' src={require('../images/pic-combo-2.png')}></img>
                    </div>
                    
                    <div className='new-bake-form'>
                        <div>
                            <h1>Create a New Bake</h1>
                            <h4>Adjust the Baker's Percentage to see the required quantity of each ingredient. </h4>
                            <h5>A basic naturally leavened bread recipe typically calls for 20% leaven and 2% salt. </h5>
                            <h5>Novice bakers - begin with lower hydration doughs (between 70-75%).</h5>
                        </div>

                        <div className='user-inputs-bake'>
                            <div className='ui input'>
                                <label>Name your bake</label>
                                <input  type='text' name='name' onChange={(e) => this.handleChange(e)}></input>
                            </div>

                            <div className='ui input'>
                                <label>Hydration (%)</label>
                                <input type='text' name='hydration' onChange={(e) => this.handleChange(e)}></input>
                            </div>

                            <div className='ui input'>
                                <label>Total flour (g)</label>
                                <input  type='text' name='total_flour_g' onChange={(e) => this.handleChange(e)}></input>
                            </div>
                        </div>

                        <div>
                                <table className='ui celled padded table'>
                                    <tr>
                                        <th>Ingredients</th>
                                        <th>Weight(g)</th> 
                                        <th>Baker's Percentage (%)</th>
                                    </tr>
                                    <tr>
                                        <td>Total Flour</td>
                                        <td><p>{total_flour_g}</p></td>
                                        <td>100%</td>
                                    </tr>
                                    <tr>
                                        <td>Water</td>
                                        {/* <td><input type='text' name='water_g' placeholder='water grams' onChange={(e) => this.handleChange(e)}></input></td> */}
                                        <td>{water_g}</td>
                                        <td>{water_p}</td>
                                    </tr>
                                    <tr>
                                        <td>Leaven</td>
                                        <td>{leaven_g}</td>
                                        <td><input 
                                        type='text' 
                                        name='leaven_p' 
                                        placeholder='leaven percentage' 
                                        className='login-input'
                                        onChange={(e) => this.handleChange(e)} ></input></td>
                                    </tr>
                                    <tr>
                                        <td>Salt</td>
                                        <td>{salt_g}</td>
                                        <td><input 
                                        type='text' 
                                        name='salt_p' 
                                        placeholder='salt percentage' 
                                        className='login-input'
                                        onChange={(e) => this.handleChange(e)} ></input></td>
                                    </tr>
                                </table>
                                <button className='buttons-cards' onClick={this.handleSubmit}>Submit</button> 
                        </div>
                </div>
                
            </div>
        )
    }
}

export default newBakeComponent

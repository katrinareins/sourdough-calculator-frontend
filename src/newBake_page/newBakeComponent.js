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

        return (
            <div className='new-bake-container'>

                    <div className='new-bake-heading'>
                        <h1>Create a New Bake</h1>
                        <h4>Quantities are calculated based on a basic recipe that calls for 20% leaven and 2% salt. Adjust the Baker's Percentage to see the required quantity of each ingredient. </h4>
                        <p>
                        Novice bakers - begin with lower hydration doughs (between 70-75%).
                        </p>

                            <div className='new-bake-form'>
                                <form>
                                    <label>Name your bake: </label>
                                    <input type='text' name='name' onChange={(e) => this.handleChange(e)} ></input>
                                    <p>Hydration percentage desired</p>
                                    <input type='text' name='hydration' onChange={(e) => this.handleChange(e)}></input>

                                    <table>
                                        <tr>
                                            <th>Ingredients</th>
                                            <th>Weight(g)</th> 
                                            <th>Baker's Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>Total Flour</td>
                                            <td><input type='text' placeholder='Enter desired total flour' name='total_flour_g' onChange={(e) => this.handleChange(e)}></input></td>
                                            <td>100%</td>
                                        </tr>
                                        <tr>
                                            <td>Water</td>
                                            <td><input type='text' name='water_g' placeholder='water grams' onChange={(e) => this.handleChange(e)} ></input></td>
                                            <td><input type='text' name='water_p' placeholder='water percentage' onChange={(e) => this.handleChange(e)} ></input></td>
                                        </tr>
                                        <tr>
                                            <td>Leaven</td>
                                            <td><input type='text' name='leaven_g' placeholder='leaven grams' onChange={(e) => this.handleChange(e)} ></input></td>
                                            <td><input type='text' name='leaven_p' placeholder='leaven percentage' onChange={(e) => this.handleChange(e)} ></input></td>
                                        </tr>
                                        <tr>
                                            <td>Salt</td>
                                            <td><input type='text' name='salt_g' placeholder='salt grams' onChange={(e) => this.handleChange(e)} ></input></td>
                                            <td><input type='text' name='salt_p' placeholder='salt percentage' onChange={(e) => this.handleChange(e)} ></input></td>
                                        </tr>
                                    </table>

                                    {/* <p>Ingredients</p>
                                    <p>Weight(g)</p>
                                    <p>Baker's Percentage</p> */}

                                    {/* <label>Total Flour: </label>
                                    <input type='text' placeholder='Enter desired total flour' name='total_flour_g' onChange={(e) => this.handleChange(e)}></input>
                                    <p>100%</p>
                    
                                    <label>Water:  </label>
                                    <input type='text' name='water_g' placeholder='water grams' onChange={(e) => this.handleChange(e)} ></input>
                                    <input type='text' name='water_p' placeholder='water percentage' onChange={(e) => this.handleChange(e)} ></input>
                    
                                    <label>Leaven:  </label>
                                    <input type='text' name='leaven_g' placeholder='leaven grams' onChange={(e) => this.handleChange(e)} ></input>
                                    <input type='text' name='leaven_p' placeholder='leaven percentage' onChange={(e) => this.handleChange(e)} ></input>
                    
                                    <label>Salt:  </label>
                                    <input type='text' name='salt_g' placeholder='salt grams' onChange={(e) => this.handleChange(e)} ></input>
                                    <input type='text' name='salt_p' placeholder='salt percentage' onChange={(e) => this.handleChange(e)} ></input> */}
                    
                                    <button className='button' onClick={this.handleSubmit}>Create new bake</button> 
                    
                                </form>
                            </div>

                </div>

                <div className='new-bake-img'>
                    <img src={require('../images/pic-combo-2.png')}></img>
                </div>



            </div>
        )
    }
}

export default newBakeComponent

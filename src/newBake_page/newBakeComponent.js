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
        const { name, rating, hydration, salt_g, leaven_g, total_flour_g, salt_p, leaven_p, water_p, water_g, notes, date } = this.props.newBake
        
        return (
            <div className='new-bake-container'>

                    <div className='new-bake-form'>
                        <h1>Create a New Bake</h1>
                        <h4>Quantities are calculated based on a basic recipe that calls for 20% leaven and 2% salt. Adjust the Baker's Percentage to see the required quantity of each ingredient. </h4>
                        <p>Novice bakers - begin with lower hydration doughs (between 70-75%).</p>

                        <div className='name-your-bake'>
                            <label>Name your bake</label>
                            <input  type='text' name='name' onChange={(e) => this.handleChange(e)}></input>
                        </div>

                        <div className='hydration-required'>
                            <label>Hydration (%)</label>
                            <input  type='text' name='hydration' onChange={(e) => this.handleChange(e)}></input>
                        </div>

                        <div className='hydration-required'>
                            <label>Total flour (g)</label>
                            <input  type='text' name='total_flour_g' onChange={(e) => this.handleChange(e)}></input>
                        </div>

                            <div className='new-bake-form'>
                                    <table className='new-form-table'>
                                        <tr>
                                            <th>Ingredients</th>
                                            <th>Weight(g)</th> 
                                            <th>Baker's Percentage</th>
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
                                            <td><input type='text' name='leaven_p' placeholder='leaven percentage' onChange={(e) => this.handleChange(e)} ></input></td>
                                        </tr>
                                        <tr>
                                            <td>Salt</td>
                                            <td>{salt_g}</td>
                                            <td><input type='text' name='salt_p' placeholder='salt percentage' onChange={(e) => this.handleChange(e)} ></input></td>
                                        </tr>
                                    </table>
                                    <button className='create-bake-button' onClick={this.handleSubmit}>Submit</button> 
                            </div>
                </div>

                <div className='new-bake-img'>
                    <img alt='' src={require('../images/pic-combo-2.png')}></img>
                </div>

            </div>
        )
    }
}

export default newBakeComponent

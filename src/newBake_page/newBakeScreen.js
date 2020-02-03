import React, { Component } from 'react'

export class NewBakeScreen extends Component {
    render() {
        return (
            <div>
                <h1>new bake screen</h1>
                <h3>Quantities are calculated based on a basic recipe that calls for 20% leaven and 2% salt. Adjust the Baker's Percentage to see the required quantity of each ingredient. </h3>
                <p>
                Novice bakers - begin with lower hydration doughs (between 70-75%).
                </p>
                <form>
                    <label>Name your bake</label>
                    <input type='text' name='bakeName'></input>
                    <p>Hydration percentage desired</p>
                    <input type='text' name='hydrationPerc'></input>
                    <p>Ingredients</p>
                    <p>Weight(g)</p>
                    <p>Baker's Percentage</p>
                    <label>Total Flour</label>
                    <input type='text' placeholder='Enter desired total flour' name='totalFlour'></input>
                    <p>100%</p>
                    <label>Water</label>
                    <input type='text' name='totalWater'></input>
                    <label>Leaven</label>
                    <input type='text' name='totalLeaven'></input>
                    <label>Salt</label>
                    <input type='text' name='totalSalt'></input>
                </form>
            </div>
        )
    }
}

export default NewBakeScreen

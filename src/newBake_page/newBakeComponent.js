import React from 'react'

export default function newBakeComponent({updateState}) {

    const handleChange = (event) => {
        updateState(event) 
    }

    return (
        <div>
            <h1>Create a New Bake</h1>
            <h3>Quantities are calculated based on a basic recipe that calls for 20% leaven and 2% salt. Adjust the Baker's Percentage to see the required quantity of each ingredient. </h3>
            <p>
            Novice bakers - begin with lower hydration doughs (between 70-75%).
            </p>
            <form>
                <label>Name your bake</label>
                <input type='text' name='bakeName' onChange={handleChange} ></input>
                <p>Hydration percentage desired</p>
                <input type='text' name='hydrationPerc'></input>
                <p>Ingredients</p>
                <p>Weight(g)</p>
                <p>Baker's Percentage</p>
                <label>Total Flour</label>
                <input type='text' placeholder='Enter desired total flour' name='total_flour_g'></input>
                <p>100%</p>

                <label>Water</label>
                <input type='text' name='water_g' placeholder='water grams' ></input>
                <input type='text' name='water_p' placeholder='water percentage' ></input>

                <label>Leaven</label>
                <input type='text' name='leaven_g' placeholder='leaven grams' ></input>
                <input type='text' name='leaven_p' placeholder='leaven percentage' ></input>

                <label>Salt</label>
                <input type='text' name='salt_g' placeholder='salt grams' ></input>
                <input type='text' name='salt_p' placeholder='salt percentage' ></input>

                <button>Continue</button>
            </form>
        </div>
    )
}

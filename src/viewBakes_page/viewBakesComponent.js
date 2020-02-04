import React from 'react'

export default function ViewBakesComponent(props) {
    return (
        <div>
        {/* const { name } = props; */}
            <p>Is this working</p>
            <p>{props.bake.name}</p>
        </div>
    )
}


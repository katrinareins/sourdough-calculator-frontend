import React from 'react'

export default function ViewBakesComponent(props) {
    const { name, rating, hydration, total_flour_g, total_flour_p, water_g, water_p, salt_g, salt_p, leaven_g, leaven_p } = props.bake

    return (
        <div>

            <h3>{name}</h3>
            <p>Hydration: {hydration}</p>
            <p>Rating: {rating}</p>
            <p>Total flour (g): {total_flour_g}</p>
            <p>Salt (p): {salt_p}</p>
            <p>Leaven (p): {leaven_p}</p>
            <button>View notes +</button>
        </div>
    )
}


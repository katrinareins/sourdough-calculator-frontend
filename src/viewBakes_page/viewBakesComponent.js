import React from 'react'

export default function ViewBakesComponent(props) {
    const { name, rating, hydration, total_flour_g, total_flour_p, water_g, water_p, salt_g, salt_p, leaven_g, leaven_p } = props.bake

    return (
        <div>

            <h3>{name}</h3>
            <p>Hydration: {hydration}</p>
            <p>Rating: {rating}</p>
            <p>Total flour (g): {total_flour_g}</p>
            <p>Total flour (p): {total_flour_p}</p>
            <p>Water (g): {water_g}</p>
            <p>Water (p): {water_p}</p>
            <p>Salt (g): {salt_g}</p>
            <p>Salut (p): {salt_p}</p>
            <p>Leaven (g): {leaven_g}</p>
            <p>Leaven (p): {leaven_p}</p>
        </div>
    )
}


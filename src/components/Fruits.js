import React from 'react'
import './fruits.css'

export default function Fruits({ showed, setShowed }) {
    const array = [
        { fruit: "olma" },
        { fruit: "behi" },
        { fruit: "xurmo" },
        { fruit: "anor" }
    ]

    return (
        <div
            className="root"
            style={showed ? { display: 'block' } : { display: 'none' }}
        >
            {
                array.map((item) => (
                    <div key={item}>{item.fruit}</div>
                ))
            }
        </div>
    )
}

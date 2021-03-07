import React from 'react'
import './button.css'

export default function Button({ title, orange, showed, setShowed }) {

    const handleClick = () => {
        setShowed(!showed)
    }

    return (
        <div>
            <button
                className={orange ? "orange_button" : "primary_button"}
                onClick={handleClick}
            >
                {title}
            </button>
        </div>
    )
}

"use client"
import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>Increase</button>
        </div>
    )
}

export default Button

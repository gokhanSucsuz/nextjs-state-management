"use client"
import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className="flex w-full justify-center p-2 bg-orange-800 text-white rounded-lg" onClick={props.onClick}>Increase</button>
        </div>
    )
}

export default Button

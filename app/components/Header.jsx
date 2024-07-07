"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div className='flex flex-col h-36 bg-purple-600 items-start justify-between'>
            <div>Redux Toolkit</div>
            <div className='flex items-center gap-6'>
                <div>User name: {state.user.name}</div>
                <div>User mail: {state.user.email}</div>
            </div>

        </div>
    )
}

export default Header

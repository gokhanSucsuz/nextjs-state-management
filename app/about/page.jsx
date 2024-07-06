"use client"
import React from 'react'
import { useStore } from '../zustand/store'
import Button from '../components/button'

const About = () => {
    const { count, increase } = useStore((state) => state)
    return (
        <div>
            <p>About Page</p>
            <p>{count}</p>
            <Button onClick={increase} />
        </div>
    )
}

export default About

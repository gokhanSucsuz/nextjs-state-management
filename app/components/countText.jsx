import React from 'react'
import { useStore } from '../zustand/store'


const CountText = () => {
    const count = useStore((state) => state.count)
    return (
        <div>
            {count}
        </div>
    )
}

export default CountText

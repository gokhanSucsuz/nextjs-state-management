import React from 'react'
import { useStore } from '../store/store'


const CountText = () => {
    const count = useStore((state) => state.count)
    console.log(count)
    return (
        <div>
            {count}
        </div>
    )
}

export default CountText

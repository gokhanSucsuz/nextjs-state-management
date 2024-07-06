import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col h-36 bg-purple-600 items-start justify-between'>
            <div>Left Side</div>
            <div className='flex items-center gap-6'>
                <div>User name: </div>
                <div>User mail: </div>
            </div>

        </div>
    )
}

export default Header

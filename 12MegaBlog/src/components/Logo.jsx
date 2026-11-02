import React from 'react'

function Logo({width = '100px'}) {
    return (
        <div>
            <img src="https://www.clipartmax.com/png/middle/338-3388567_logo-blogger-png.png" alt="logo"  width={width} className='rounded-lg'/>
        </div>
    )
}

export default Logo

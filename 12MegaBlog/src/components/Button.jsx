import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {

    // const handler = (e) => { // test purpose
    //     console.log('hello buddy');
    //     console.log(e.currentTarget.type);
    // }

    return (
        <button type={type} className = {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button

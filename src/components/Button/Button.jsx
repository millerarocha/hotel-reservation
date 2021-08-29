import React from 'react'

const Button = ({
    className,
    children,
    onClick,
    name=''
}) => {
    return (
        <div>
            <button 
                className={className}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    )
}

export default Button

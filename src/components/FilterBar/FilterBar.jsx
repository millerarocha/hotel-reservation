/**
 * Dependencies
 */
import React from 'react'

/**
 * Styles
 */
import './FilterBar.css'

const FilterBar = ({
    children,
}) => {
    return (
        <div className='filter'>
            {children}    
        </div>
    )
}

export default FilterBar

/**
 * Dependencies
 */
import React from 'react'

/**
 * Styles
 */
import './Results.css'

/**
 * Components
 */
import Card from '../Card/Card'

const Results = ({
    data,
    handleReserve
}) => {
    return (
        <div className='cards'>
            {data.map((item)=>                
                <Card
                    item={item}
                    handleReserve={handleReserve}
                />
            )}
        </div>
    )
}

export default Results

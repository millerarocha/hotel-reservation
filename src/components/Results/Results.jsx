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
                    key={item.slug}
                    item={item}
                    handleReserve={handleReserve}
                />
            )}
        </div>
    )
}

export default Results

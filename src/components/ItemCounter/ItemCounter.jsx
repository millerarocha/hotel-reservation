/**
 * Dependencies
 */
import React from 'react'

/**
 * Styles
 */
import './ItemCounter.css'

const ItemCounter = ({
    itemNumber
}) => {
    const fullItems = new Array(parseInt(starsNumber)).fill(null);
    const emptyItems = new Array(parseInt(4-starsNumber)).fill(null);
    
    return (        
        <div className="card__counter">
            {fullItems.map((_, idx) => <i className="fas fa-dollar-sign card__counter-icon active" key={idx}></i>)}
            {emptyItems.map((_, idx) => <i className="fas fa-dollar-sign card__counter-icon" key={idx}></i>)}  
        </div>
    )
}

export default ItemCounter

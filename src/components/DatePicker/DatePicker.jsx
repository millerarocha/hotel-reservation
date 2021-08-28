/**
 * Dependencies
 */
import React from 'react'

const DatePicker = ({
    onChange,

}) => {
    return (
        <div className="filter__container">
            <i className="fas fa-calendar-alt filter__input-icon"></i>
            <input 
                className="filter__input input" 
                type="date" 
                placeholder="Fecha inicial"
                onChange={onChange}
            />
        </div>
    )
}

export default DatePicker

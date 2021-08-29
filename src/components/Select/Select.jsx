import React from 'react'

const Select = ({
    options=[],
    
}) => {
    return (        
        <div className="filter__container">
            <i className="fas fa-flag filter__input-icon"></i>
            <select name="country" id="" className="filter__select">
                {options.map((option)=>                
                    <option key={option.id} value={option.value} className="filter__option">{option.text}</option>
                )}
            </select>
        </div>
    )
}

export default Select

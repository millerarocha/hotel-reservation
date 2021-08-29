import React from 'react'

const Select = ({
    options=[],
    onChange
}) => {
    return (        
        <div className="filter__container">
            <i className="fas fa-flag filter__input-icon"></i>
            <select id="" className="filter__select" onChange={onChange}>
                {options.map((option)=>                
                    <option 
                        key={option.value} 
                        value={option.value} 
                        className="filter__option"
                    >
                        {option.text}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select

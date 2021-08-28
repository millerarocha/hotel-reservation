/**
 * Dependencies
 */
import React from 'react'

/**
 * Styles
 */
import './Header.css'

/**
 * Components
 */
import List from '../List/List'

const Header = ({
    title = '',
    listData = []
}) => {
    return (
        <div 
            className='header'
        >            
            <h1 className="header__title">{title}</h1> 
            <List
                className='header__text'
                data = {listData}
            />   
        </div>
    )
}

export default Header

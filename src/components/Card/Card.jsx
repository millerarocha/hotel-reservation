/**
 * Dependencies
 */
import React from 'react'

/**
 * Styles
 */
import './Card.css'

/**
 * Components
 */
import ItemCounter from '../ItemCounter/ItemCounter'
import Button from '../Button/Button'

const Card = ({
    item
}) => {
    return (
        <div className="card">
            <img src="./images/la-bamba-de-areco.jpg" alt="" className="card__image"/>
            <h2 className="card__title">La casa de la montaña</h2>
            <p className="card__date">Desde el martes, 6 de abril de 2021</p>
            <p className="card__date">Hasta el martes, 6 de abril de 2021</p>
            <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nihil impedit? Assumenda dolore nulla ea nobis sunt, neque unde aliquid quos asperiores qui vitae aut similique maiores optio ipsam quibusdam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias doloribus nam culpa blanditiis minus id officia, iste ut! Quasi sint autem aliquid esse distinctio blanditiis nihil. Delectus numquam cupiditate neque! </p>
            <div className="card__info">
                <i className="fas fa-map-marker-alt card__info-icon"></i>
                <p className="card__info-text">Villa la angostura, Argentina</p>
            </div>
            <div className="card__info-container">
                <div className="card__info card__info--medium">
                    <i className="fas fa-bed card__info-icon"></i>
                    <p className="card__info-text">8 habitaciones</p>
                </div>
                <ItemCounter
                    itemNumber='2'
                />                
            </div>
            <Button
                className='card__button'
            >
            Reservar
            </Button>
        </div>
    )
}

export default Card

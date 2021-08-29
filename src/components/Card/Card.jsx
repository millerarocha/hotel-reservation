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
    item,
    handleReserve
}) => {
    const weekDays = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

    let dateConverter = (date) =>{
        let dateToConvert = new Date(date);
        return `${weekDays[dateToConvert.getDay()]} ${dateToConvert.getDate()} de ${months[dateToConvert.getMonth()]} de ${dateToConvert.getFullYear()}`;
    }

    return (
        <div className="card">
            <img src={item.photo.default} alt={item.name} className="card__image"/>
            <h2 className="card__title">{item.name}</h2>
            <p className="card__date">Desde el {dateConverter(item.availabilityFrom)}</p>
            <p className="card__date">Hasta el {dateConverter(item.availabilityTo)}</p>
            <p className="card__description">{item.description}</p>
            <div className="card__info">
                <i className="fas fa-map-marker-alt card__info-icon"></i>
                <p className="card__info-text">{item.city}, {item.country}</p>
            </div>
            <div className="card__info-container">
                <div className="card__info card__info--medium">
                    <i className="fas fa-bed card__info-icon"></i>
                    <p className="card__info-text">{item.rooms} habitaciones</p>
                </div>
                <ItemCounter
                    itemNumber={item.price}
                />                
            </div>
            <Button
                className='card__button'
                onClick={()=>handleReserve(item.name)}
            >
            Reservar
            </Button>
        </div>
    )
}

export default Card

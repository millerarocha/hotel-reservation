/**
 * Dependencies
 */
import React, { useState } from 'react'


/**
 * Styles
 */
import './App.css';

/**
 * Components
 */
import Header from './components/Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import DatePicker from './components/DatePicker/DatePicker';
import Select from './components/Select/Select';
import Button from './components/Button/Button';
import Results from './components/Results/Results'

/**
 * Databases
 */
import hotels from './DB/hotels.js';
import countries from './DB/countries.js';
import prices from './DB/prices';
import sizes from './DB/sizes';

function App() {
  const listData = ['cualquier fecha', 'cualquier país', 'cualquier precio', 'cualquier tamaño']
  const [listFilters, setlistFilters] = useState(listData);
  const [filterValues, setFilterValues] = useState([]);
  const [actualHotels, setActualHotels] = useState(hotels);
  const [actualCountry, setActualCountry] = useState("cualquier país");
  const [actualPrice, setActualPrice] = useState("cualquier precio");
  const [actualSize, setActualSize] = useState("cualquier tamaño");
  const [initDate, setInitDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [message, setMessage] = useState("");

  const showMessage = (hotels) =>{
    let newMessage;
    if(hotels.length === 0){
      newMessage = "No hay disponibilidad de hoteles con estos filtros";
    }else{
      newMessage = "";
    }

    setMessage(newMessage)
  }

  const reserveHotel = (name) =>{
    alert(`hotel ${name} Reservado!`);
  }

  const resetFilters = () =>{
    setlistFilters(listData);
    setActualHotels(hotels);
    setFilterValues([]);
    setActualCountry("cualquier país");
    setActualSize("cualquier tamaño");
    setActualPrice("cualquier precio");
    setInitDate("");
    setLastDate("");
    setMessage("");
  }

  const updateListFilters = (index, value) =>{
    listFilters[index] = value;
    const updateFilters = [...listFilters]    
    setlistFilters(updateFilters)  
  }

  const updateFilters = (index,value) => {
    filterValues[index] = value;
    const updateFilters = [...filterValues];
    setFilterValues(updateFilters);
  }

  const filterHotels = (filterValues) =>{ 
    let hotelsToFilter = hotels;

    const hotelsFilter = hotelsToFilter.filter(hotel => {
      if(filterValues.length === 1){
        return hotel.country === filterValues[0];  
      }else if(filterValues.length === 2 && filterValues[0]){
        return hotel.country === filterValues[0] && hotel.price === filterValues[1]
      }else if(filterValues.length === 2 && filterValues[1]){
        return hotel.price === filterValues[1]; 
      }else if(filterValues.length === 3 && !filterValues[0] && !filterValues[1]){        
        if(filterValues[2]==='Pequeño'){
          return hotel.rooms < 10;
        }else if(filterValues[2]==='Grande'){
          return hotel.rooms > 20;
        }else if(filterValues[2]==='Mediano'){
          return hotel.rooms > 10 && hotel.rooms < 20;
        }
      }else if(filterValues.length === 3 && filterValues[1] !== undefined && !filterValues[0]){
        if(filterValues[2]==='Pequeño'){
          return hotel.rooms < 10 && hotel.price === filterValues[1];
        }else if(filterValues[2]==='Grande'){
          return hotel.rooms > 20 && hotel.price === filterValues[1];
        }else if(filterValues[2]==='Mediano'){
          return hotel.rooms > 10 && hotel.rooms < 20 && hotel.price === filterValues[1];
        }
      }else if(filterValues.length === 3 && filterValues[0] !== undefined && filterValues[1] !== undefined && filterValues[2] !== undefined){
        if(filterValues[2]==='Pequeño'){
          return hotel.rooms < 10 && hotel.price === filterValues[1] && hotel.country === filterValues[0];
        }else if(filterValues[2]==='Grande'){
          return hotel.rooms > 20 && hotel.price === filterValues[1] && hotel.country === filterValues[0];
        }else if(filterValues[2]==='Mediano'){
          return hotel.rooms > 10 && hotel.rooms < 20 && hotel.price === filterValues[1] && hotel.country === filterValues[0];
        }
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] === undefined && filterValues[1] === undefined && filterValues[2] === undefined){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs;
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] && filterValues[1] === undefined && filterValues[2] === undefined){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.country === filterValues[0];
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] && filterValues[1] && filterValues[2] === undefined){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.country === filterValues[0] && hotel.price === filterValues[1];
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] === undefined && filterValues[1] && filterValues[2] === undefined){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.price === filterValues[1];
      }
      else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] === undefined && filterValues[1] ==undefined && filterValues[2]){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        if(filterValues[2]==='Pequeño'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms < 10;
        }else if(filterValues[2]==='Grande'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 20;
        }else if(filterValues[2]==='Mediano'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 10 && hotel.rooms < 20;
        }
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] && filterValues[1] ==undefined && filterValues[2]){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        if(filterValues[2]==='Pequeño'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms < 10 && hotel.country === filterValues[0];
        }else if(filterValues[2]==='Grande'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 20 && hotel.country === filterValues[0];
        }else if(filterValues[2]==='Mediano'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 10 && hotel.rooms < 20 && hotel.country === filterValues[0];
        }
      }else if(filterValues.length === 5 && filterValues[3] && filterValues[4] && filterValues[0] && filterValues[1] && filterValues[2]){
        const initDateMs =  Date.parse(filterValues[3]);
        const lastDateMs = Date.parse(filterValues[4]);
        if(filterValues[2]==='Pequeño'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms < 10 && hotel.country === filterValues[0] && hotel.price === filterValues[1];
        }else if(filterValues[2]==='Grande'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 20 && hotel.country === filterValues[0] && hotel.price === filterValues[1];
        }else if(filterValues[2]==='Mediano'){
          return hotel.availabilityFrom >= initDateMs && hotel.availabilityTo <= lastDateMs && hotel.rooms > 10 && hotel.rooms < 20 && hotel.country === filterValues[0] && hotel.price === filterValues[1];
        }
      }

        
    });
    setActualHotels(hotelsFilter); 
    showMessage(hotelsFilter);   
  }

  const filterByCountry = (e) => {
    let country = e.target.value;
    updateListFilters(1,country);
    setActualCountry(country);
    updateFilters(0,country);

    filterHotels(filterValues);
  }

  const filterByPrice = (e) => {
    let price = e.target.value;
    updateListFilters(2,price);
    setActualPrice(price);

    let priceNumber=0;

    if(price === 'Económico'){
      priceNumber = 1;
    }else if(price === 'Comfort'){
      priceNumber = 2;
    }else if(price === 'Lujos'){
      priceNumber = 3;
    }else if(price === 'Magnífico'){
      priceNumber = 4
    }

    updateFilters(1,priceNumber);

    filterHotels(filterValues);
  }

  const filterBySize = (e) => {
    let size = e.target.value;
    updateListFilters(3,size);
    setActualSize(size);
    updateFilters(2,size);

    filterHotels(filterValues);
  }

  /**
   * Date filters functions 
   */

  const weekDays = ['lunes','martes','miércoles','jueves','viernes','sábado','domingo'];
  const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

  let dateConverter = (date) =>{
      let dateToConvert = new Date(date);
      return `${weekDays[dateToConvert.getDay()]} ${dateToConvert.getDate()} de ${months[dateToConvert.getMonth()]} de ${dateToConvert.getFullYear()}`;
  }

  const dateMessages = (initDate, lastDate) => {
    let message = ""
    if(initDate === "" && lastDate === ""){
      message = "cualquier fecha";
    }else if(lastDate === ""){
      message = 'Seleccione la fecha final';
    }else if(initDate === ""){
      message = "¡Debe seleccionar una Fecha inicial!";
    }else{
      const initDateMs =  Date.parse(initDate);
      const lastDateMs = Date.parse(lastDate);

      const initDateMessage = dateConverter(initDateMs);
      const lastDateMessage = dateConverter(lastDateMs);

      if(initDate >= lastDate){
        message = 'fecha inicial debe ser menor que la fecha final'
      }else{
        message = `desde el ${initDateMessage} hasta el ${lastDateMessage}`;
      }      
    }
    updateListFilters(0,message);
  }

  const filterInitDate = (e) => {
    let date = e.target.value;
    dateMessages(date,lastDate);
    setInitDate(date);
    updateFilters(3,date);
    if(lastDate!=''){
      filterHotels(filterValues);
    }
  }

  const filterLastDate = (e) => {
    let date = e.target.value;
    dateMessages(initDate,date);
    setLastDate(date);
    updateFilters(4,date);
    if(initDate!=''){
      filterHotels(filterValues);
    }
  }

  return (
    <div 
      className="App container"
    >
      {/* Header */}
      <Header
        title='Reserva los mejores Hoteles!'
        listData = {listFilters}
      />

      {/* FilterBar */}
      <FilterBar>
        <DatePicker
          value={initDate}
          onChange={filterInitDate}
        />
        <DatePicker
          value={lastDate}          
          onChange={filterLastDate}
        />
        <Select
          value={actualCountry}
          options={countries}
          onChange={filterByCountry}
        />
        <Select 
          value={actualPrice}
          options={prices}          
          onChange={filterByPrice}
        />
        <Select
          value={actualSize} 
          options={sizes}
          onChange={filterBySize}
        />
        <Button
          className='filter__button'
          onClick={resetFilters}
        >
          <i className="fas fa-trash-alt filter__button-icon"></i>
          Limpiar
        </Button>
      </FilterBar>

      {/* Results */}
      <h3>{message}</h3>
      <Results
        data={actualHotels}
        handleReserve={reserveHotel}
      />
    </div>
  );
}

export default App;

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
import filters from './DB/filters'

function App() {
  const listData = ['cualquier fecha', 'cualquier país', 'cualquier precio', 'cualquier tamaño']
  const [actualFilters, setActualFilters] = useState(listData);
  const [actualHotels, setActualHotels] = useState(hotels);

  /**
   * @method reserveHotel 
   * @description shows a message of the reserved hotel
   * @param {*} name 
   */
  const reserveHotel = (name) =>{
    alert(`hotel ${name} Reservado!`);
  }

  /**
   * @method resetFilters 
   * @description reset default values filters
   */
  const resetFilters = () =>{
    alert('Reseteo de todos los filtros!')
  }

  /**
   * @description update the list of filters
   * @param {*} index 
   * @param {*} value 
   */
  const updateListFilters = (index, value) =>{
    actualFilters[index] = value;
    const updateFilters = [...actualFilters]    
    setActualFilters(updateFilters)  
  }

  const filterByCountry = (e) => {
    let country = e.target.value;
    updateListFilters(1,country);
  }

  const filterByPrice = (e) => {
    let price = e.target.value;
    updateListFilters(2,price);
  }

  return (
    <div 
      className="App container"
    >
      {/* Header */}
      <Header
        title='Reserva los mejores Hoteles!'
        listData = {actualFilters}
      />

      {/* FilterBar */}
      <FilterBar>
        <DatePicker
        />
        <DatePicker/>
        <Select 
          options={countries}
          onChange={filterByCountry}
        />
        <Select 
          options={prices}          
          onChange={filterByPrice}
        />
        <Select options={sizes}/>
        <Button
          className='filter__button'
          onClick={resetFilters}
        >
          <i class="fas fa-trash-alt filter__button-icon"></i>
          Limpiar
        </Button>
      </FilterBar>

      {/* Results */}
      <Results
        data={hotels}
        handleReserve={reserveHotel}
      />
    </div>
  );
}

export default App;

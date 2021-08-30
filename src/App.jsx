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
  const [actualHotels, setActualHotels] = useState(hotels);
  const [actualCountry, setActualCountry] = useState("cualquier país");

  const reserveHotel = (name) =>{
    alert(`hotel ${name} Reservado!`);
  }

  const resetFilters = () =>{
    setlistFilters(listData);
    setActualHotels(hotels);
    setActualCountry("cualquier país");
  }

  const updateListFilters = (index, value) =>{
    listFilters[index] = value;
    const updateFilters = [...listFilters]    
    setlistFilters(updateFilters)  
  }

  const filterHotels = (filterValue) =>{    
    const hotelsFilter = actualHotels.filter(hotel => hotel.country === filterValue);
    setActualHotels(hotelsFilter);
  }

  const filterByCountry = (e) => {
    let country = e.target.value;
    updateListFilters(1,country);
    setActualCountry(country);
    console.log(country);
    filterHotels(country);
  }

  const filterByPrice = (e) => {
    let price = e.target.value;
    updateListFilters(2,price);
  }

  const filterBySize = (e) => {
    let size = e.target.value;
    updateListFilters(3,size);
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
        />
        <DatePicker/>
        <Select
          value={actualCountry}
          options={countries}
          onChange={filterByCountry}
        />
        <Select 
          options={prices}          
          onChange={filterByPrice}
        />
        <Select 
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
      <Results
        data={actualHotels}
        handleReserve={reserveHotel}
      />
    </div>
  );
}

export default App;

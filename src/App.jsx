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

  const reserveHotel = (name) =>{
    alert(`hotel ${name} Reservado!`);
  }

  const resetFilters = () =>{
    setlistFilters(listData);
    setActualHotels(hotels);
    setFilterValues([]);
    setActualCountry("cualquier país");
    setActualSize("cualquier tamaño");
    setActualPrice("cualquier precio")
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
        return hotel.price === filterValues[1] 
      }

        
    });
    setActualHotels(hotelsFilter);
    console.log(filterValues, filterValues.length);        
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
      <Results
        data={actualHotels}
        handleReserve={reserveHotel}
      />
    </div>
  );
}

export default App;

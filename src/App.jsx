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
import sizes from './DB/sizes'

function App() {
  const listData = ['fecha', 'país', 'precio', 'tamaño']

  return (
    <div 
      className="App container"
    >
      {/* Header */}
      <Header
        title='Reserva los mejores Hoteles!'
        listData = {listData}
      />

      {/* FilterBar */}
      <FilterBar>
        <DatePicker/>
        <DatePicker/>
        <Select options={countries}/>
        <Select options={prices}/>
        <Select options={sizes}/>
        <Button
          className='filter__button'
        >
          <i class="fas fa-trash-alt filter__button-icon"></i>
          Limpiar
        </Button>
      </FilterBar>

      {/* Results */}
      <Results
        data={hotels}
      />
    </div>
  );
}

export default App;

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

function App() {
  const listData = ['fecha', 'país', 'precio', 'tamaño']

  return (
    <div 
      className="App container"
    >
      <Header
        title='Reserva los mejores Hoteles!'
        listData = {listData}
      />
      <FilterBar>
        <DatePicker/>
        <DatePicker/>
      </FilterBar>
    </div>
  );
}

export default App;

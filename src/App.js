import React from 'react';
import './App.css';
import Weathercard from './components/WeatherCard';
import CitySelector from './components/CitySelector';
import UseFetch from './hooks/UseFetch';
import { Container } from 'react-bootstrap';
import { API_KEY, API_BASE_URL } from './apis/config'



const App = () => {
  const { data, error, isLoading, setUrl } = UseFetch();

  
    return (
      <Container className="App">
        <CitySelector
        onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} 
        />
      </Container>
    );
  };
  
export default App;
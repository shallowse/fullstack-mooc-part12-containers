import { useState } from 'react';

import axios from 'axios';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import SearchView from './SearchView.js';
import ListResult from './ListResult.js';


function App() {
  const [people, setPeople] = useState([]);
  const [city, setCity] = useState('');

  async function handleSearch(city) {
    if (!city) {
      setPeople([])
      setCity('');
      return;
    }

    const url = `http://localhost:6453/${city}`;
    const { data } = await axios.get(url);
    setPeople(data);
    setCity(city);
    //console.log(people);
  }

  return (
    <Container component="main">
      <CssBaseline />
      <div>
        <SearchView handleSearch={handleSearch} />
        <Divider style={{ marginTop: '2rem', marginBottom: '1rem' }}>
          Results {people.length > 0 && `for ${city.toUpperCase()}`}
        </Divider>
        <ListResult people={people} city={city} />
      </div>
    </Container>
  );
}

export default App;

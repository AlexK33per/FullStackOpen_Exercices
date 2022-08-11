import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {

	const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setData(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  	return (
		<div>
			<h1>Countries</h1>
			<form>
				find countries: <input type="introduce a country" value={filter} onChange={handleFilter}/>
			</form>
      <h3>Countries selected</h3>
      <ul>
        {
          data
            .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
            .length < 10
          ? data
              .filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
              .map((country, i) => <li key={i}>{country.name.common}</li>)
          : <p>Too many coincidences, please be more specific</p>
        }
      </ul>
		</div>
	);
}

export default App;


import './App.css';
import { useEffect, useState } from 'react';
import Boxes from './Components/Boxes/Boxes';
import CountrySelect from './Components/Countires/contries';
import ChartFunction from './Components/Charts/chart'
import {fetchData} from "./Api/apidata";
import covidImage from './Images/image.png'

function App() {
  
  const [data, setData] = useState({});
 
  useEffect(() => {
       const fetchAPI =  async() => {
           setData(await fetchData());
       }
       fetchAPI();
        
    }, [])

    const [country, setCountry] = useState([]);
    const handleCountry = async (country) => {
      const countryData = await fetchData(country);
      setCountry(country);
      setData(countryData);
    }
    
  return (
    <div className="App">
      <img src={covidImage} alt="Covid-19" className='image'/>
      <Boxes data={data} />
      <CountrySelect handleCountry={handleCountry} />
      <ChartFunction chartData= {data} countryData = {country}/>
    </div>
  );
}

export default App;

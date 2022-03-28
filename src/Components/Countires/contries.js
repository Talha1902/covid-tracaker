import React, {useEffect,useState} from "react";
import { NativeSelect, FormControl } from "@mui/material";
import { fetchCountries } from "../../Api/apidata";

const CountrySelect = ({handleCountry})=>{


  const [fetchedCountires, setFetchCountires] = useState([]);
  useEffect (()=>{
    const fetchAPI = async()=>{
      setFetchCountires(await fetchCountries());
    }

    fetchAPI();
  }, [setFetchCountires])

   return <>
   <div className="countryBox">
     <FormControl className="form">
      <NativeSelect defaultValue="" onChange={(e) => handleCountry(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountires.map((country, i) => <option key = {i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
   </div>
          </>
}

export default CountrySelect;
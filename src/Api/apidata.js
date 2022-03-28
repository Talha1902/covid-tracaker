import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country)=>{
    
    let ChangedURL = url;

    if (country) {
        ChangedURL = `${url}/countries/${country}`
    }
    try
    {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(ChangedURL);
        return {confirmed, recovered, deaths, lastUpdate};
    }
    catch (error) {

    }
}
//getting data for charts 

export const fetchDailyData = async()=>{
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((apiData) => ({
            confirmed: apiData.confirmed.total,
            deaths: apiData.deaths.total,
            date: apiData.reportDate,
            recovered: apiData.recovered
        }))
        return modifiedData; 
    }
    catch(error)
    {
        return [];
    }
}


//getting data for countires

export const fetchCountries = async()=>{
    try
    {
        const {data: {countries}} = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    }
    catch (error)
    {
        return [];
    }
}
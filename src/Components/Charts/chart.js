
import React, {useState, useEffect} from "react";
import { fetchDailyData } from "../../Api/apidata";
import { Line, Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
// import './Charts.css';

 const ChartFunction = ( {chartData:{confirmed, recovered, deaths} , countryData})=>{
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();

    }, [])

    const lineChart = (
        dailyData.length ?
        ( 
        <Line
        data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
                data: dailyData.map(({confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: dailyData.map(({ recovered }) => recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',    
                fill: true,
            }, {
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
            }],
        }}
         />) : null
    );

        const barChart = (
            confirmed ?
            (
                <Bar 
                    data = {{
                        labels: ["Infected" , "Recovered" , "Confirmed"],
                        datasets: [{
                            label: 'People',
                            backgroundColor: [
                                'blue',
                                'green',
                                'red'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    
                />
            ) : null
        )

    return <>
    <div className="chartBox">
        <div className="chart">
        {countryData == "" ? lineChart : barChart}
            
        </div>
    </div>
    </>
}

export default ChartFunction;
import React, { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Srinagar",
        temp:24,
        tempMin: 20,
        tempMax : 30,
        humidity: 47,
        weather: "haze", 
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
return(
    <>
    <h1 className="text-center font-bold text-4xl mb-5 mt-5">Weather App by Shariq </h1>
    <SearchBox updateInfo = {updateInfo}/>
    <InfoBox info={weatherInfo} />
</>
)
}
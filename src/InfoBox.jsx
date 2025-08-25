import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faSnowflake } from "@fortawesome/free-solid-svg-icons";
export default function InfoBox({ info }) {
    const INIT_URL=
    "https://images.unsplash.com/photo-1621931646295-fae36d940a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c2t5fGVufDB8fDB8fHw"

    let HOT_URL = 
    "https://images.unsplash.com/photo-1563630381190-77c336ea545a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VufGVufDB8fDB8fHww"

    let COLD_URL =
    "https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"

    let RAIN_URL =
    "https://images.unsplash.com/photo-1501691223387-dd0500403074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D"

  return (
    <div className="px-6 w-80 mx-auto text-center shadow-lg shadow-cyan-500/50 rounded-lg p-4">
      <h5 className="text-xl font-semibold mb-2">City: {info.city}
{info.humidity > 80 ? <FontAwesomeIcon icon= {faCloudRain} />: info.temp > 15 ? <FontAwesomeIcon icon={ faSun} />
 : <FontAwesomeIcon icon={faSnowflake} />
}
      </h5>
      <div className="object-contain mb-4">
      <img
         src={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
         }
         alt="Weather"
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <div>🌡 Temperature = {info.temp}°C</div>
      <div>💧 Humidity = {info.humidity}%</div>
      <div>⬇️ Min Temp = {info.tempMin}°C</div>
      <div>⬆️ Max Temp = {info.tempMax}°C</div>
    </div>
  )
}



// import React, { useState } from "react"
// export default function SearchBox(){
//  let [city, setCity] = useState("");
//     const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
//     const API_KEY = "1fa6fe0a1439fa8dc5c3c63e83d2ebcc";

//     let getWeatherInfo = async () => {
        
//         await fetch(`${API-URL}?q=${city}&appid=${API-KEY}`);
//         let jsonResponse = await response.json();
//         console.log(jsonResponse);
//     };
   
//     let handelChange = (evt) => {
//         setCity(evt.target.value);
//     };
//     let handelSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(city);
//         setCity("");
//         getWeatherInfo();
//     };
//     return(
//         <div className="text-center">
//             <h1>Weather App</h1>
//   <form onSubmit={handelSubmit}>
//             <input type="text" placeholder="search here"className="bg-blue-100 px-2 text-center py-2" required value={city} onChange={handelChange}/>
//             <br />
//             <button className="bg-red-100 px-19 py-2">Search</button>
//         </form>
//         </div>
      
//     )
// }

 



// import React, { useState } from "react";

// export default function SearchBox({updateInfo}) {
//   let [city, setCity] = useState("");
//   let [error, setError] = useState(false);
  

//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = "1fa6fe0a1439fa8dc5c3c63e83d2ebcc";

//   // Function to fetch weather info
//   let getWeatherInfo = async () => {
//     try{
// let response = await fetch(
//       `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//     );
//     let jsonResponse = await response.json();
//     console.log("Full API response:", jsonResponse);

//     if (jsonResponse.cod !== 200) {
//       console.log("City not found:", jsonResponse.message);
//       return;
//     } 
//     }
    
    
// let jsonResponse = await response.json();
//     let result = {
//         city: city,
//       temp: jsonResponse.main.temp,
//       tempMin: jsonResponse.main.temp_min,
//       tempMax: jsonResponse.main.temp_max,
//       humidity: jsonResponse.main.humidity,
//       weather: jsonResponse.weather[0].description,
//     };

//     console.log("Weather Data:", result);
//     return result;
//   } catch(err){
//     throw err;
//   }
// }
//   // Input change handler
//   let handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   // Form submit handler
//   let handleSubmit = async(evt) => {
//     try{
// evt.preventDefault();
//     console.log("Searching city:", city);
//     let newInfo = await getWeatherInfo();
//     updateInfo(newInfo);
//     setCity("");
//     }catch(err){
//         setError(true);
//     }
    
//   };

//   return (
//     <div className="text-center">
      
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search city"
//           className="bg-blue-100 px-4 py-2 text-center rounded"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br />
//         <button className="bg-red-400 mt-3 px-6 py-2 rounded text-white hover:bg-red-500">
//           Search
//         </button>
//         {error && <p>No such place exits!</p>}
//       </form>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1fa6fe0a1439fa8dc5c3c63e83d2ebcc";

  // Function to fetch weather info
  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log("Full API response:", jsonResponse);

      if (jsonResponse.cod !== 200) {
        console.log("City not found:", jsonResponse.message);
        return;
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
      };

      console.log("Weather Data:", result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  // Input change handler
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // Form submit handler
  let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      console.log("Searching city:", city);
      let newInfo = await getWeatherInfo();
      if (newInfo) {
        updateInfo(newInfo);
      } else {
        setError(true);
      }
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city"
          className="bg-blue-100 px-4 py-2 text-center rounded"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <button className="bg-red-400 mt-3 px-6 py-2 rounded text-white hover:bg-red-500">
          Search
        </button>
        {error && <p className="text-red-700">No such place exists!</p>}
      </form>
    </div>
  );
}
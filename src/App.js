import React,{useState}from "react";
import axios from "axios";
import {weatherObject} from './weather-object'
import {Location,Temp,Description} from './components/top-components'
import {Feels,Humidity,Wind} from './components/bottom-components'
function App() {
  const [data,setData] = useState({});
  const [location,setLocation] = useState('');
  const url = weatherObject.url+location+weatherObject.units+weatherObject.apiKey;  
  const searchLocation = (event)=>{
    if(event.key ==='Enter'){    
      axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })}


  }
  return (
     
    <React.Fragment>

      <div className="container">
          <h1>Weather App</h1> 
        <div className="top">
          <div className="search">
            <input type="text" className="searchBar" onKeyPress={searchLocation} value={location} onChange = {event=> setLocation(event.target.value)} placeholder='Search location'  
            />
            
          </div>
          <Location cityName = {data.main?<p>Weather in {data.name}</p>:null }></Location>
          <Temp temp = {data.main? <p> Temperature: {data.main.temp}°C</p>: null}></Temp>
          <Description description={data.weather?  <p>Description: {data.weather[0].main}</p>:null}></Description>
        </div>
        <div className="bottom">
          <Feels feels= {data.main? <p>Feels like <br></br> {data.main.feels_like}°C</p>: null}></Feels>
          <Humidity humidity = {data.main? <p>Humidity <br></br> {data.main.humidity}%</p>: null}></Humidity>
          <Wind wind = {data.main? <p>Wind<br></br> {data.wind.speed} MPH</p>: null}></Wind>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

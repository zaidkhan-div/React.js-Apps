import React from 'react'
import './Home.css'
import { useState } from 'react'
import Clear from './../assets/clear.png'
import Clouds from './../assets/clouds.png'
import Drizzle from './../assets/drizzle.png'
import Humidity from './../assets/humidity.png'
import Mist from './../assets/mist.png'
import Rain from './../assets/rain.png'
import Search from './../assets/search.png'
import Snow from './../assets/snow.png'
import Wind from './../assets/wind.png'


const Home = () => {
    const [cityname, setCityName] = useState('');
    const [data, setData] = useState(null)

    let apiKey = "88c22151468d8609cbdce07b808891ff";

    function submitCityName(e) {
        setCityName(' ')
        fetchData();
    }

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`)
            const data = await response.json();
            setData(data)
            console.log(data.weather[0].main)
        } catch (error) {
            console.log('Could not get the data')
        }
    }

    return (
        <div>

            <div className="card">
                <div className="search">
                    <input type="text" value={cityname} placeholder='Enter City Name' onChange={(e) =>
                        setCityName(e.target.value)} />
                    <button onClick={submitCityName ? '' : ' '} type="button">
                        <img src={Search} alt="" />
                    </button>
                </div>
                {/* <div className="error">
                    <p>Invalid City Name</p>
                </div> */}
                <div className={`weather `}>
                    <img src={Clear} alt="Clear" className="weather-icon" />
                    <h1 className="temp">22°c</h1>
                    <h2 className="city">{cityname}</h2>
                    <div className="details">
                        <div className="col">
                            <img src="images/humidity.png" alt="" className="icon" />
                            <div>
                                <p className="humidity">50%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="images/wind.png" alt="" />
                            <div>
                                <p className="wind">15 km/h</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

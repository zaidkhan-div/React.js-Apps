import React from 'react'
import './Home.css'
import { useState, useEffect } from 'react'

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
            for (let index = 0; index < data.length; index++) {
                console.log(data.weather[index])
            }
            console.log(data.weather[0].main==='Cloud')
        } catch (error) {
            console.log(error, 'Could not get the data')
        }
    }

    return (
        <div>
            <input type="text" value={cityname} placeholder='Enter City Name' onChange={(e) => setCityName(e.target.value)} />
            <button onClick={submitCityName}>Search</button>
        </div>
    )
}

export default Home

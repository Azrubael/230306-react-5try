import React from 'react'
import '../App.css'
import { useWeather } from '../hooks/useWeather'


export const Card = ({ city }) => {
  
  const [data, setData] = useWeather(city)
  
  if (!data) return null
  const { name, weather, main } = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main
  
  const closeOnClick = () => {
    setData(null)
    let reducedCityList = JSON.parse(localStorage.getItem('citiesList'))
    reducedCityList = reducedCityList.filter(element => element !== name)
    localStorage.setItem('citiesList', JSON.stringify(reducedCityList))
  }
  
  return (
    <div className='Card'>
      <button className="closeButton" onClick={closeOnClick}>X</button>
      <div className="MainInfo">
        <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
        <div className="Title">{ name }</div>
        <div className="Description">{description}</div>
        <div className="Temperature">{temp.toFixed()}</div>
      </div>
      <div className="Information">
          <div className="InfoTitle">Humidity: {humidity}</div>
          <div className="InfoValue">Feels like: {feels_like.toFixed()}</div>
      </div>
    </div>
  )
}
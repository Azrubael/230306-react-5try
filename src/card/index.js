import React, { useEffect, useState } from 'react'
import '../App.css'
import { API_KEY } from '../ssettings.js'


export const Card = ({ city }) => {
  const [data, setData] = useState(null)
  
  const closeOnClick = () => {
    setData(null)
  }
  
  useEffect(() => {
    if (!API_KEY) {
      throw new Error('API_KEY is not defined')
    }
    if (!city) {
      throw new Error('Any city is not defined')
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong')
      }
      return res.json()
      })
    .then(setData)
    .catch((err) => {
      setData(null)
      console.error(err)
    })
  }, [city])

  if (!data) return null
  const { name, weather, main } = data
  const { description, icon } = weather[0]
  const { temp, humidity, feels_like } = main

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
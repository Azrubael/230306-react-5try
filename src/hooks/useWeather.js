import {useEffect, useState} from "react"
import { API_KEY } from '../ssettings.js'

export const useWeather = ( city ) => {
  const [data, setData] = useState(null)
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
  return [data, setData]


}
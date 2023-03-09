import {useEffect, useState} from "react"

export const useCitiesList = () => {
  const list = ['Kyiv', 'Dnipro'] //'New York', 'London', 'Tokyo'
  const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem('citiesList')) || list)

  useEffect(() => {
    localStorage.setItem('citiesList', JSON.stringify(citiesList))
  }, [citiesList])
  return [citiesList, setCitiesList]
}
import React, { useState, useEffect } from 'react'
import './App.css'
import { Input } from './input'
import { CardList } from './cardlist'

function App() {
  const list = ['Kyiv', 'Dnipro'] //'New York', 'London', 'Tokyo'
  const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem('citiesList')) || list)

  useEffect(() => {
    localStorage.setItem('citiesList', JSON.stringify(citiesList))
  }, [citiesList])

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  )
}

export default App

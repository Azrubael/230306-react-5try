import React from 'react'
import './App.css'
import { Input } from './input'
import { Card } from './card'

function App() {
  const citiesList = ['New York', 'London', 'Tokyo', 'Sydney']
  return (
    <div className="Main">
      <Input />
      <div className="CardList">
      {
        citiesList.map((city) => {
          return <Card key={city} city={city} />
        })
      }
      </div>
    </div>
  )
}

export default App

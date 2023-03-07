import React, {useState} from 'react'
import './App.css'
import { Input } from './input'
import { CardList } from './cardlist'

function App() {
  const list = ['New York', 'London', 'Tokyo']
  const [citiesList, setCitiesList] = useState(list)
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList}/>
      <CardList citiesList={ citiesList }/>
    </div>
  )
}

export default App

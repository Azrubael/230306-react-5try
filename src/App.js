import React from 'react'
import './App.css'
import { Input } from './components/Input'
import { CardList } from './components/CardList'
import { useCitiesList } from './hooks/useCitiesList'

function App() {
  const [citiesList, setCitiesList] = useCitiesList()

  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  )
}

export default App

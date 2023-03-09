import React from 'react'
import { Card } from '../card'
import '../App.css'

export const CardList = ({ citiesList }) => (
    <div className='CardList'>
      {
        citiesList.map( (city) => <Card key={city} city={city} /> )
      }
    </div>
  )
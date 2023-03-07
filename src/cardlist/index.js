import React, { useEffect } from 'react'
import { Card } from '../card'
import '../App.css'

export const CardList = ({ citiesList }) => {

  //специальная логика, связанная с работой хука
  useEffect(() => {
    console.log('useEffect')
    const func = () => {
      console.log('resize')
    }
    window.addEventListener('resize', func)
    return () => {
      console.log('unmount')
      window.removeEventListener('resize', func)
    }
  }, [])

  //в общем случае хуков может быть сколько угодно
  //пропсов тоже может быть несколько
  useEffect(() => {
    console.log('citiesList.length=', citiesList.length)
  }, [citiesList])

  return (
    <div className='CardList'>
      {
        citiesList.map((city) => {
          return <Card key={city} city={city} />
        })
      }
    </div>
  )
}
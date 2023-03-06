import React from 'react'
import '../App.css'

export const Input = () => {
  return (
    <div className='InputWrap'>
      <input className='Input' type='text' placeholder='Search...' />
      <button className='Button'>+</button>
    </div>
  )
}
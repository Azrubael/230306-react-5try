import React from 'react'
import '../App.css'

export const Input = () => {
  const currentDate = new Date().toDateString()
  const handleOnChange = (e) => {
    console.log('handleOnChange at', currentDate)
  }
  const handleOnClick = (e) => {
    console.log('handleOnClick at', currentDate)
  }

  return (
    <div className='InputWrap'>
      <input className='Input'
        type='text'
        placeholder='Search...'
        onChange={handleOnChange}  
      />
      <button className='Button'
        onClick={handleOnClick}
      >+</button>
    </div>
  )
}
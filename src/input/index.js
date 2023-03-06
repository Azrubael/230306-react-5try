import React, { useState } from 'react'
import '../App.css'

const currentDate = new Date().toDateString()

const InputTag = () => {
  const [inputValue, setInputValue] = useState('empty')
  const handleOnChange = (e) => {
    console.log('handleOnChange at', currentDate)
    setInputValue(e.target.value)
  }
  
  return (
      <input className='Input'
        type='text'
        placeholder='Search...'
        onChange={handleOnChange}  
        value={inputValue}
      />
  )
}

const Button = () => {
  const handleOnClick = (e) => {
    console.log('handleOnClick at', currentDate)
  }
  
  return(
    <button className='Button' onClick={handleOnClick}>Submit</button>
  )
}

export const Input = () => {
  return (
    <div className='InputWrap'>
      <InputTag />
      <Button />
    </div>
  )
}
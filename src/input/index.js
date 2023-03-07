import React, { useState, useRef } from 'react'
import '../App.css'

export const Input = ({ setCitiesList }) => {
  const [inputValue, setInputValue] = useState('enter city')
  const inputRef = useRef(null) 
  // useRef is a hook that returns a reference to the DOM element
  
  const handleOnClick = () => {
    setCitiesList((currentArray) => [...currentArray, inputValue])
    setInputValue('')
    inputRef.current.focus()
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='InputWrap'>
      <input className='Input'
        placeholder='Search city...'
        onChange={handleOnChange}  
        value={inputValue}
        ref={inputRef}
      />
      <button className='Button' onClick={handleOnClick}>Submit</button>
    </div>
  )
}
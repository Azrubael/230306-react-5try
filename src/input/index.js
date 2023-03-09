import React, { useState, useRef } from 'react'
import '../App.css'

export const Input = ({ setCitiesList }) => {
  const placeHolder = 'Enter city'
  const [inputValue, setInputValue] = useState(placeHolder)
  const inputRef = useRef(null) 
  // useRef is a hook that returns a reference to the DOM element
  
  const handleOnClick = () => {
    if (inputValue !== placeHolder) {
      setCitiesList((currentArray) => [...currentArray, inputValue])
      setInputValue(placeHolder)
      inputRef.current.focus()
    }
  }

  const handleOnChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='InputWrap'>
      <input className='Input'
        placeholder={placeHolder}
        onChange={handleOnChange}  
        value={inputValue}
        ref={inputRef}
      />
      <button className='Button' onClick={handleOnClick}>Submit</button>
    </div>
  )
}
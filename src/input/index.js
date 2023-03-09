import React, { useState, useRef } from 'react'
import '../App.css'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
}
  
export const Input = ({ setCitiesList }) => {
  const placeHolder = 'A city name'
  const [inputValue, setInputValue] = useState(placeHolder)
  const inputRef = useRef(null) 
  // useRef is a hook that returns a reference to the DOM element
  
  const handleOnClick = () => {
    if (!inputValue) return
    if (inputValue !== placeHolder) {
      const capitalizedCityName = capitalize(inputValue)
      setCitiesList((currentArray) => {
        if (currentArray.includes(capitalizedCityName)) {
          return currentArray
        } else {
          return [...currentArray, capitalizedCityName]
        }
      })
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
      <button className='Button' onClick={handleOnClick}>Add a city</button>
    </div>
  )
}
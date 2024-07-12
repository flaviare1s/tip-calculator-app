/* eslint-disable react/prop-types */
import { useState } from "react"
import './Input.css'

const Input = ({ title, icon, value, legend, onChange, min, placeholder }) => {
  const [error, setError] = useState('')

  function handleChange(value) {
    const numberValue = Number(value)
    if (numberValue < min) {
      setError("Can't be zero")
      onChange(0)
    } else {
      setError('')
      onChange(numberValue)
    }
  }

  return (
    <section className='relative flex flex-col'>
      <h3 className="text-dark-grayish-cyan font-bold mb-1.5">{title}</h3>
      <input
        className={`bg-very-light-grayish-cyan h-12 text-very-dark-cyan font-bold text-2xl text-right px-5 rounded-[5px] placeholder:text-[#00474B] border-2 border-transparent outline-none focus:border-strong-cyan ${error ? 'error' : ''}`}
        type="number"
        value={value || ''}
        placeholder={placeholder}
        min={min}
        onChange={(e) => handleChange(e.target.value)}
      />
      {error && <small className="text-[#E17457] text-base font-bold absolute top-0 right-0">{error}</small>}
      <img className="absolute top-[45px] left-[20px]" src={icon} alt={legend} />
    </section>
  )
}

export default Input

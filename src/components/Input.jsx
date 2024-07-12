import { useState } from "react"

const Input = ({ title, icon, placeholder, legend, onChange, min }) => {
  const [error, setError] = useState('')

  function handleChange(value) {
    const numberValue = Number(value)
    if(numberValue < min) {
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
        className='bg-very-light-grayish-cyan h-12 text-very-dark-cyan font-bold text-2xl text-right px-5 rounded-[5px] text-[#00474B] placeholder:text-[#00474B]' 
        type="number"
        defaultValue={placeholder}
        min={min}
        onChange={(e) => handleChange(e.target.value)}
      />
      {error && <small className="text-[#E17457] text-base font-bold absolute top-0 right-0">{error}</small>}
      <img className="absolute top-[40px] left-[20px]" src={icon} alt={legend} />
    </section>
  )
}

export default Input

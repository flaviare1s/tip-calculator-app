/* eslint-disable react/prop-types */
import './Tips.css'
import { useState } from "react"

const Tips = ({ tip, onTipChange }) => {
  const [customTip, setCustomTip] = useState('')

  function handleTipClick(value) {
    onTipChange(value)
    setCustomTip('')
  }

  const handleCustomTipChange = (value) => {
    const numValue = Number(value)
    if (numValue > 0) {
      setCustomTip(value)
      onTipChange(numValue)
    } else {
      setCustomTip('')
      onTipChange(0)
    }
  };

  return (
    <section className="py-8">
      <h3 className="text-dark-grayish-cyan font-bold mb-[16px]">Select Tip %</h3>
      <div className="tips grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[311px] md:max-w-[379px] m-auto">
        <button className={`${tip === 5 ? 'selected' : 'unselected'} hover:bg-[#9FE8DF] hover:text-[#00474B]`} onClick={() => handleTipClick(5)}>5%</button>
        <button className={`${tip === 10 ? 'selected' : 'unselected'} hover:bg-[#9FE8DF] hover:text-[#00474B]`} onClick={() => handleTipClick(10)}>10%</button>
        <button className={`${tip === 15 ? 'selected' : 'unselected'} hover:bg-[#9FE8DF] hover:text-[#00474B]`} onClick={() => handleTipClick(15)}>15%</button>
        <button className={`${tip === 25 ? 'selected' : 'unselected'} hover:bg-[#9FE8DF] hover:text-[#00474B]`} onClick={() => handleTipClick(25)}>25%</button>
        <button className={`${tip === 50 ? 'selected' : 'unselected'} hover:bg-[#9FE8DF] hover:text-[#00474B]`} onClick={() => handleTipClick(50)}>50%</button>
        <input
          className='bg-[#F3F9FA] text-[#547878] placeholder:text-[#547878] font-bold text-2xl text-right pr-3 border-2 border-transparent outline-none focus:border-strong-cyan rounded-[5px]'
          type="number"
          placeholder='Custom'
          value={customTip}
          onChange={(e) => handleCustomTipChange(e.target.value)}
        />
      </div>
    </section>
  )
}

export default Tips

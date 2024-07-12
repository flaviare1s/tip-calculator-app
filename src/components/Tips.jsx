import './Tips.css'
import { useState } from "react"

const Tips = () => {
  const [tip, setTip] = useState('15%')

  return (
    <section className="py-8">
      <h3 className="text-dark-grayish-cyan font-bold mb-[16px]">Select Tip %</h3>
      <div className="tips grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[311px] md:max-w-[379px] m-auto">
        <button className={tip === '5%' ? 'selected' : 'unselected'} onClick={() => setTip('5%')}>5%</button>
        <button className={tip === '10%' ? 'selected' : 'unselected'} onClick={() => setTip('10%')}>10%</button>
        <button className={tip === '15%' ? 'selected' : 'unselected'} onClick={() => setTip('15%')}>15%</button>
        <button className={tip === '25%' ? 'selected' : 'unselected'} onClick={() => setTip('25%')}>25%</button>
        <button className={tip === '50%' ? 'selected' : 'unselected'} onClick={() => setTip('50%')}>50%</button>
        <button className={tip === 'Custom' ? 'selected' : 'custom'} onClick={() => setTip('Custom')}>Custom</button>
      </div>
    </section>
  )
}

export default Tips

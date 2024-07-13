import Input from "./Input"
import Tips from "./Tips"
import Result from "./Result"
import dollarIcon from '../assets/icon-dollar.svg'
import personIcon from '../assets/icon-person.svg'
import { useState } from "react"

const CalculatorBody = () => {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [tip, setTip] = useState(0)

  function handleBillChange(value) {
    setBill(Number(value))
  }

  function handlePeopleChange(value) {
    setPeople(Number(value))
  }

  function handleTipChange(value) {
    setTip(Number(value))
  }

  function handleReset() {
    setBill(0)
    setPeople(1)
    setTip(0)
  }

  const tipAmount = (bill * (tip / 100)) / (people || 1) 
  const total = (bill * (1 + (tip / 100))) / (people || 1)


  return (
    <section className="bg-white p-8 md:p-[45px] w-full sm:w-[80%] md:w-[100%] lg:w-[920px] rounded-t-[25px] md:rounded-b-[25px] md:flex md:gap-12 h-full">
      <div>
        <Input id='0' title='Bill' icon={dollarIcon} value={bill} legend='Dollar Icon' onChange={handleBillChange} min={0} placeholder='0' />
        <Tips tip={tip} onTipChange={handleTipChange} />
        <Input id='1' title='Number of People' icon={personIcon} value={people} legend='Person Icon' onChange={handlePeopleChange} min={1} placeholder='0' />
      </div>
      <Result tipAmount={tipAmount} total={total} onReset={handleReset} />
    </section>
  )
}

export default CalculatorBody

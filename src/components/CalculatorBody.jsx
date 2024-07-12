import Input from "./Input"
import Tips from "./Tips"
import Result from "./Result"
import dollarIcon from '../assets/icon-dollar.svg'
import personIcon from '../assets/icon-person.svg'

const CalculatorBody = () => {
  return (
    <section className="bg-white p-8 md:p-[45px] w-full sm:w-[80%] md:max-w-[920px] rounded-t-[25px] md:rounded-b-[25px]">
      <Input title='Bill' icon={dollarIcon} placeholder='0' legend='Dollar Icon' />
      <Tips />
      <Input title='Number of People' icon={personIcon} placeholder='0' legend='Person Icon' />
      <Result />
    </section>
  )
}

export default CalculatorBody
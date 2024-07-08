import Bill from "./Bill"
import Tips from "./Tips"

const CalculatorBody = () => {
  return (
    <section className="bg-white p-8 md:p-[45px] w-full sm:w-[80%] md:max-w-[920px] rounded-t-[25px] md:rounded-b-[25px]">
      <Bill />
      <Tips />
    </section>
  )
}

export default CalculatorBody
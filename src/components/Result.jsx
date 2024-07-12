import Button from "./Button"
import ResultInput from "./ResultInput"

const Result = ({ tipAmount, total, onReset }) => {
  return (
    <section className="bg-very-dark-cyan rounded-[15px] px-6 pt-[37px] pb-6 mt-8 md:mt-0 relative">
      <ResultInput title='Tip Amount' placeholder={`$${tipAmount.toFixed(2)}`} />
      <ResultInput title='Total' placeholder={`$${total.toFixed(2)}`} />
      <Button onClick={onReset} />
    </section>
  )
}

export default Result

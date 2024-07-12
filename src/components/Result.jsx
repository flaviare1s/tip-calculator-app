import Button from "./Button"
import ResultInput from "./ResultInput"

const Result = () => {
  return (
    <section className="bg-very-dark-cyan rounded-[15px] px-6 pt-[37px] pb-6 mt-8">
      <ResultInput title='Tip Amount' placeholder='$0.00' />
      <ResultInput title='Total' placeholder='$0.00' />
      <Button />
    </section>
  )
}

export default Result

import dollarIcon from '../assets/icon-dollar.svg'

const Bill = () => {
  return (
    <section className='relative flex flex-col'>
      <label htmlFor="bill" className="text-dark-grayish-cyan font-bold">Bill</label>
      <input className='bg-very-light-grayish-cyan h-12 text-very-dark-cyan font-bold text-right px-5 rounded-[5px]' type="text" id="bill" name="bill" placeholder="0" required/>
      <img className='w-5 absolute top-[35px] left-[25px]' src={dollarIcon} alt="Dollar Icon" />
    </section>
  )
}

export default Bill

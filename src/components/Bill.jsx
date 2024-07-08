import dollarIcon from '../assets/icon-dollar.svg'

const Bill = () => {
  return (
    <section className='relative flex flex-col'>
      <h3 className="text-dark-grayish-cyan font-bold">Bill</h3>
      <input className='bg-very-light-grayish-cyan h-12 text-very-dark-cyan font-bold text-2xl text-right px-5 rounded-[5px]' type="text" id="bill" name="bill" placeholder="0" required/>
      <img className='w-3 absolute top-[38px] left-[25px]' src={dollarIcon} alt="Dollar Icon" />
    </section>
  )
}

export default Bill

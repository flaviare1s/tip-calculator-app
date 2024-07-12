const Input = ({ title, icon, placeholder, legend }) => {
  return (
    <section className='relative flex flex-col'>
      <h3 className="text-dark-grayish-cyan font-bold mb-1.5">{title}</h3>
      <input className='bg-very-light-grayish-cyan h-12 text-very-dark-cyan font-bold text-2xl text-right px-5 rounded-[5px]' type="number" id="bill" name="bill" placeholder={placeholder} required/>
      <img className="absolute top-[40px] left-[20px]" src={icon} alt={legend} />
    </section>
  )
}

export default Input

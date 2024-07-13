const ResultInput = ({ title, placeholder }) => {
  return (
    <section>
      <div className="absolute">
        <h3 className=" text-white font-bold">{title}</h3>
        <small className="text-grayish-cyan text-[13px] font-bold">/ person</small>
      </div>
      <input
        type="text"
        value={placeholder}
        readOnly
        className="bg-very-dark-cyan w-full h-12 mb-5 text-right text-[32px] md:text-5xl font-bold text-strong-cyan placeholder:text-strong-cyan">
      </input>
    </section>
  )
}

export default ResultInput

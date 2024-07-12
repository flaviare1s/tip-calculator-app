const Button = ({ onClick }) => {
  return (
    <button
      className="bg-strong-cyan text-very-dark-cyan font-bold rounded-[5px] h-12 w-full text-[20px] hover:bg-[#9FE8DF] md:absolute md:bottom-10 md:w-[88%]" onClick={onClick}>RESET</button>
  )
}

export default Button
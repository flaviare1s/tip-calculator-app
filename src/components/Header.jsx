import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
      <img className='pt-[50px] pb-10 md:pb-[88px]' src={logo} alt="Logo" />
    </header>
  )
}

export default Header
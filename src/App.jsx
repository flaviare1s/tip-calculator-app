import './App.css'
import CalculatorBody from './components/CalculatorBody'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
      <main className='bg-light-grayish-cyan font-space flex flex-col items-center justify-center m-auto'>
        <Header />
        <CalculatorBody />
      </main>
  )
}

export default App

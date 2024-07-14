
import Header from './components/Header'
import CalculatorCard from './components/CalculatorCard'
import InvestmentTable from './components/InvestmentTable'
import { useState } from "react"

function App() {

  const initialValue = { initialInvestment: 1000, annualInvestment: 1200, expectedReturn: 6, duration: 10 }

  const [userInput, setUserInput] = useState(initialValue)

  const inputIsValid = userInput.duration >= 1

  return (
    <>
    <Header/>
    <CalculatorCard setUserInput={setUserInput} userInput={userInput}/>
    {inputIsValid ?  <InvestmentTable userInput={userInput}/> : <p>Please enter duration greater than 0</p>}
    </>
  )
}

export default App

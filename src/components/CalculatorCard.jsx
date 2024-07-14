

const CalculatorCard = ({setUserInput,userInput}) => {

 

    return (
        <section id='user-input' >
            <div className="input-group">
                <p>
                    <label >Initial investment</label>
                    <input type="number" 
                    value={userInput.initialInvestment} 
                    required 
                    onChange={(e) => setUserInput((prevUserInput)=>{return { ...prevUserInput, initialInvestment: +e.target.value }})} />
                </p>
                <p >
                    <label  >Annual investment</label>
                    <input type="number" 
                    required 
                    value={userInput.annualInvestment}
                    onChange={(e) => setUserInput((prevUserInput)=>{return { ...prevUserInput, annualInvestment: +e.target.value }})} />
                </p>
            </div>

            <div className="input-group">
                <p >
                    <label  >Expected Return</label>
                    <input type="number" 
                    required 
                    value={userInput.expectedReturn} 
                    onChange={(e) => setUserInput((prevUserInput)=>{return { ...prevUserInput, expectedReturn: +e.target.value }})} />
                </p>
                <p >
                    <label  >Duration</label>
                    <input type="number" 
                    required 
                    value={userInput.duration} 
                    onChange={(e) => setUserInput((prevUserInput)=>{return { ...prevUserInput, duration: +e.target.value }})} />
                </p>
            </div>


        </section>
    )

}

export default CalculatorCard
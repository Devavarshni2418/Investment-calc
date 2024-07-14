
import { calculateInvestmentResults, formatter } from '../util/investment'

const InvestmentTable = ({ userInput }) => {

    const investmentResult = calculateInvestmentResults(userInput)

    const initialInvestment = investmentResult[0].valueEndOfYear - investmentResult[0].interest - investmentResult[0].annualInvestment

    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>

            {
                investmentResult.map((investment, i) => {

                    const totalInterest = investment.valueEndOfYear - investment.annualInvestment * investment.year - initialInvestment

                    const totalInvestedCaptital = investment.valueEndOfYear - totalInterest
                    return (
                        <tbody className='tbody' key={i}>
                            <tr  >
                                <td>
                                    {investment.year}
                                </td>
                                <td>
                                    {formatter.format(investment?.valueEndOfYear)}
                                </td>
                                <td>
                                    {formatter.format(investment?.interest)}
                                </td>
                                <td>
                                    {formatter.format(totalInterest)}
                                </td>
                                <td>
                                    {formatter.format(totalInvestedCaptital)}
                                </td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )

}

export default InvestmentTable
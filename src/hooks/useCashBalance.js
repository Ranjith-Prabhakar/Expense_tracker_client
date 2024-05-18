import useStore from "../store/store"

const useCashBalance = () => {
  const transactions = useStore(state => state.transactions)
  console.log(transactions)
  const cashBalance = transactions.reduce((acc, curr) => {
    if (curr.modeOfTransaction === "Cash Receipt") {
      acc.receipt += curr.amount
      
    } else if (curr.modeOfTransaction === "Cash Payment") {
      acc.payment += curr.amount
    }
    return acc
  }, { receipt: 0, payment: 0 })
  let cash_balance = cashBalance.receipt - cashBalance.payment 

  return cash_balance

}

export default useCashBalance
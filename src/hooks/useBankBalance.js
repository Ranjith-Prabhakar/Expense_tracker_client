import useStore from "../store/store"

const useBankBalance = () => {
  const transactions = useStore(state => state.transactions)
  console.log(transactions)
  const bankBalance = transactions.reduce((acc, curr) => {
    if (curr.modeOfTransaction === "Bank Receipt") {
      acc.receipt += curr.amount

    } else if (curr.modeOfTransaction === "Bank Payment") {
      acc.payment += curr.amount
    }
    return acc
  }, { receipt: 0, payment: 0 })
  let bank_balance = bankBalance.receipt - bankBalance.payment

  return bank_balance

}

export default useBankBalance
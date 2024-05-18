import useStore from "../store/store"

const useReceivebles = () => {
  const transactions = useStore(state => state.transactions)
  console.log(transactions)
  const data = transactions.reduce((acc, curr) => {
    if (!acc[curr.partyName]) {
      acc[curr.partyName] = { Receipts: 0, Payments: 0 };
    }
    if (curr.modeOfTransaction === "Cash Receipt" || curr.modeOfTransaction === "Bank Receipt") {
      acc[curr.partyName].Receipts += curr.amount;
    } else if (curr.modeOfTransaction === "Cash Payment" || curr.modeOfTransaction === "Bank Payment") {
      acc[curr.partyName].Payments += curr.amount;
    }
    return acc;
  }, {});

  const receivebles = []
  for (let item in data) {
    if (data[item].Receipts < data[item].Payments) {
      receivebles.push({ name: item, amount: data[item].Payments - data[item].Receipts })
    }
  }
  const receivebleSum = receivebles.reduce((acc, curr) => {
    acc += curr.amount
    return acc
  }, 0)
  return { receivebles, receivebleSum }

}

export default useReceivebles
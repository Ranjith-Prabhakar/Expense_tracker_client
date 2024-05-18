import useStore from "../store/store"
const Payables = () => {
   const transactions = useStore(state=>state.transactions)
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
for(let item in data){
  if(data[item].Receipts < data[item].Payments){
    receivebles.push({name:item,amount:data[item].Payments - data[item].Receipts })
  }
}
 
console.log("data",data);
console.log("receivebles",receivebles);
  return (
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Mode Of Transaction</th>
        <th>Type Of Transaction</th>
        <th>Party</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="hover">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr className="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr className="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Payables
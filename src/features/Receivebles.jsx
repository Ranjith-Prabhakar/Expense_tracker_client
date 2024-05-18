import useStore from "../store/store"
const Receivebles = () => {
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
        <th>Sl No</th>
        <th>Party</th>
        <th>Amount</th>
        </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        receivebles.length && receivebles.map((item,index)=>
          <tr key={index} className="hover">
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
  )
}

export default Receivebles
import useStore from '../store/store'
const DayBook = () => {
  const transactions = useStore(state=>state.transactions)
  console.log("transactions",transactions)
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Mode Of Transaction</th>
        <th>Party</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
        {
          transactions?.map((item,index) => (
            <tr key={index} className="hover">
            <th >{item.createdAt.slice(0,10)}</th>
            <th >{item.modeOfTransaction}</th>
            <th >{item.partyName}</th>
            <th >{item.amount}</th>
            </tr>
          ))
          
        }
    </tbody>
  </table>
</div>
  )
}

export default DayBook
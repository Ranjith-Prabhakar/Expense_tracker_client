import usePayables from '../hooks/usePayables'
import useReceivebles from '../hooks/useReceivebles'
import useStore from '../store/store'
const DayBook = () => {
  const transactions = useStore(state=>state.transactions)
  const {receivebleSum} = useReceivebles()
  const {payableSum} = usePayables()
  
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Mode Of Transaction</th>
        <th>Party</th>
        <th>Receipt</th>
        <th>Payments</th>
        <th>Difference</th>
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
            <th >
            {
              item.modeOfTransaction === "Cash Receipt" || item.modeOfTransaction === "Bank Receipt" ? `${item.amount}` : ""
            }
            </th>
            <th >
            {
              item.modeOfTransaction === "Cash Payment" || item.modeOfTransaction === "Bank Payment" ? `${item.amount}` : ""
            }
            </th>
            </tr>
          ))
          
        }
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th></th>
        <th></th>
        <th>{payableSum}</th>
        <th>{receivebleSum}</th>
        <th>{receivebleSum - payableSum}</th>
      </tr>
    </tfoot>
  </table>
 
</div>
  )
}

export default DayBook
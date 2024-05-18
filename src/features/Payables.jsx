import usePayables from "../hooks/usePayables"
const Payables = () => {
   const {payables, payableSum} = usePayables()
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
        payables.length && payables.map((item,index)=>
          <tr key={index} className="hover">
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.amount}</td>
      </tr>
        )
      }
      
    </tbody>
     <tfoot>
      <tr>
        <th>Total</th>
        <th></th>
        <th>{payableSum}</th>
      </tr>
    </tfoot>
  </table>
</div>
  )
}

export default Payables
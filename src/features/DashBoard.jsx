import useBankBalance from "../hooks/useBankBalance"
import useCashBalance from "../hooks/useCashBalance"
import usePayables from "../hooks/usePayables"
import useReceivebles from "../hooks/useReceivebles"

const DashBoard = () => {
  const cash_balance = useCashBalance()
  const bank_balance = useBankBalance()
  const {receivebleSum} = useReceivebles()
  const {payableSum} = usePayables()

  console.log(cash_balance)
  return (
    <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <h1>Cash Balance</h1>
    <h1>{cash_balance}</h1>
    </div> 
    <div className="divider lg:divider-horizontal" /> 
    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <h1>Bank Balance</h1>
    <h1>{bank_balance}</h1>
    </div> 
    <div className="divider lg:divider-horizontal" /> 
    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <h1>Receivebles</h1>
    <h1>{receivebleSum}</h1>
    </div> 
    <div className="divider lg:divider-horizontal" /> 
    <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
    <h1>Payables</h1>
    <h1>{payableSum}</h1>
    </div> 
  
  {/* <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider lg:divider-horizontal" /> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
  <div className="divider lg:divider-horizontal" /> 
  <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div> */}
</div>
  )
}

export default DashBoard
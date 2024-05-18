import { useRef, useState } from "react";
import useStore  from "../store/store";
import { addTransaction } from "../API/Api";
import { toast } from "sonner";
import { setLocalStorageTransactions } from "../utils/localStorage";
const AddEntries = () => {
  const user = useStore(state => state.user);
  const [showAlert, setShowAlert] = useState("");
const [amount,setAmount] = useState()
const [narration,setNarration] = useState("")
const modeOfTransactionRef = useRef()
const partyRef = useRef()
const addTransactios = useStore(state => state.addTransactios);
const submitEntry = async()=>{
try {
  if(modeOfTransactionRef.current.value === "Type Of Transaction"){
 setShowAlert("Please Choose a Transaction Type");
      setTimeout(() => { setShowAlert(""); }, 2000);
  }else if( partyRef.current.value === "Party"){
    setShowAlert("Please Choose a Party");
      setTimeout(() => { setShowAlert(""); }, 2000);
  }else if(!amount){
     setShowAlert("Please Add Amount");
      setTimeout(() => { setShowAlert(""); }, 2000);
  }else if(!narration){
    setShowAlert("Please Add Narration");
      setTimeout(() => { setShowAlert(""); }, 2000);
  }else{
        const result = await addTransaction(user._id,modeOfTransactionRef.current.value,partyRef.current.value,amount,narration)
    console.log("result rom add entries",result)
    if(result.data.transactions){
      addTransactios(result.data.transactions)
      setLocalStorageTransactions(result.data.transactions)
      toast.success(result.data.message)
      modeOfTransactionRef.current.value =""
      partyRef.current.value = ""
      setNarration("")
      setAmount("")
    }
  }
} catch (error) {
  console.log(error.message)
}
}
  return (
    <div className="flex">
      {showAlert && <div className="toast">
        <div className="alert alert-info">
          <span>{showAlert}</span>
        </div>
      </div>}
      <div className="w-1/2"> 
      <div className="space-y-1">
      {/* mode of transaction */}
      <div className="">
        <select className="select select-bordered w-full " ref={modeOfTransactionRef}>
  <option disabled selected>Type Of Transaction</option>
  <option>Cash Receipt</option>
  <option>Cash Payment</option>
  <option>Bank Receipt</option>
  <option>Bank Payment</option>
  {/* <option>Borrowings Receipt</option>
  <option>Borrowings Payment</option>
  <option>Lendings Receipt</option>
  <option>Lendings Payment</option> */}

  {/* <option>Lendings</option>
  <option>Borrowings</option> */}
</select>
      </div>
       {/* party */}
      <div className="">
       <select className="select select-bordered w-full "ref={partyRef}>
     <option disabled selected>Party</option>
     {user && user.members && user.members.length && user.members.map((item,index)=> (
      <option key={index}>{item.userName}</option>
     ))}
  
</select>
      </div>
      {/*  */}
      <div className="">
      <label htmlFor="amount" >Enter Amount<br/>
      <input id="amount" type="text" placeholder="Type here" className="input input-bordered w-full " value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
      </label>
      </div>
      {/*  narration*/}
      <textarea className="textarea textarea-bordered w-full" placeholder="Narration" value={narration} onChange={(e)=>{setNarration(e.target.value)}}/>
      <button className="btn btn-outline w-full" onClick={submitEntry}>Add Entry</button>
    </div></div>
      <div className="flex justify-center items-center w-1/2">
<h1>current balance</h1>
      </div>
    </div>
   
  )
}

export default AddEntries
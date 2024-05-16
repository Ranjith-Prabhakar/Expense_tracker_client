
const AddEntries = () => {
  return (
    <div className="flex">
      <div className="w-1/2"> 
      <div className="space-y-1">
      {/* mode of transaction */}
      <div className="">
        <select className="select select-bordered w-full ">
  <option disabled selected>Type Of Transaction</option>
  <option>Cash</option>
  <option>Bank</option>
  <option>Receivebles</option>
  <option>Payables</option>
</select>
      </div>
       {/* party */}
      <div className="">
        <select className="select select-bordered w-full ">
  <option disabled selected>Party</option>
  <option>Cash</option>
  <option>Bank</option>
  <option>Receivebles</option>
  <option>Payables</option>
</select>
      </div>
      {/*  */}
      <div className="">
      <label htmlFor="amount" >Enter Amount<br/>
      <input id="amount" type="text" placeholder="Type here" className="input input-bordered w-full " />
      </label>
      </div>
      {/*  narration*/}
      <textarea className="textarea textarea-bordered w-full" placeholder="Narration" />
      <button className="btn btn-outline w-full">Add Entry</button>
    </div></div>
      <div className="flex justify-center items-center w-1/2">
<h1>current balance</h1>
      </div>
    </div>
   
  )
}

export default AddEntries
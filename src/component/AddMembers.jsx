import { useState } from "react";

const AddMembers = () => {
   const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState("");
  
  // Convert the regex string into a RegExp object
  const mail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  
  const submitForm = () => {
    if (userName === "") {
      setShowAlert("Please fill the User name");
      setTimeout(() => { setShowAlert(""); }, 2000);
    } else if (email === "") {
      setShowAlert("Please fill the Email");
      setTimeout(() => { setShowAlert(""); }, 2000);
    } else if (!mail.test(email)) { // Use the test method on the RegExp object
      setShowAlert("Provide a valid Email");
      setTimeout(() => { setShowAlert(""); }, 2000);
    } else{
      console.log(email,userName)
    }
  };
  return (
     <div className="flex justify-center items-center">
      {showAlert && <div className="toast">
        <div className="alert alert-info">
          <span>{showAlert}</span>
        </div>
      </div>}
     <div className="space-y-2 w-1/2">
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input type="text" className="grow" placeholder="Username" value={userName} onChange={handleUserName} />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" value={email} onChange={handleEmail} />
        </label>
        <button className="btn btn-outline btn-success py-0 w-full " onClick={submitForm}>Sign up</button>
      </div>
      </div>
  )
}

export default AddMembers
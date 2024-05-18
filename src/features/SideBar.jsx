import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const SideBar = ({setMenuItem,menuItem}) => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("transactions")
    navigate('/login')
  }
  return (
    <div className="space-y-2">
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 1 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(1)}}>Dash Board</div>
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 2 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(2)}}>Add Members</div>
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 3 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(3)}}>Add Entries</div>
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 4 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(4)}}>Day Book</div>
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 5 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(5)}}>Receivebles</div>
      <div className={`border rounded p-2 cursor-pointer ${menuItem === 6 ?'bg-white text-blck' : ""  }`} onClick={()=>{setMenuItem(6)}}>Payables</div>
      <div className={`border rounded p-2 cursor-pointer `} onClick={handleLogout} >Logout</div>
    </div>
  )
}

export default SideBar
import { useEffect, useState } from "react"
import DashBoard from "../component/DashBoard"
import SideBar from "../component/SideBar"
import DayBook from "../component/DayBook"
import AddEntries from "../component/AddEntries"
import Payables from "../component/Payables"
import Receivebles from "../component/Receivebles"
import AddMembers from "../component/AddMembers"
import Navbar from "../Layout/Navbar"
import useStore from "../store/store"
// import { isLogedIn } from "../API/Api"
const Home = () => {
  const [menuItem,setMenuItem] = useState(1)
  const { user } = useStore((state) => ({ user: state.user }));
  const { loginUser } = useStore((state) => ({ user: state.loginUser }));
  const [loading,setLoading] = useState(true)
  const [userState,setUserState] =useState(false)
  // const [userData,setUserData] =useState({})
  // cookie retreival stage

  console.log("user",user)
  useEffect(()=>{
    // setUserData(user)
    if(user.userName){
      setUserState(true)
    }else{
      // const userData = isLogedIn()
      const userData = JSON.parse(localStorage.getItem("user"))
      console.log("userData locla",userData)
      if(userData.userName){
        loginUser(userData)
        setUserState(true)
      }
      // setUserData(userData)
    }
  },[])
  useEffect(()=>{
if(userState){
  setLoading(false)
}
  },[userState])
  return (
    <>
    {
      loading ? <div>Loading</div>:<div className="flex flex-col">
    <Navbar />
   
    <div className="flex p-10 gap-2">
      <div className="border p-5 rounded-md">
        <SideBar setMenuItem={setMenuItem} menuItem={menuItem}/>
        </div>
       <div className="border p-5 rounded-md flex-1">
        {menuItem === 1 && <DashBoard  />}
        {menuItem === 2 && <AddMembers />}
        {menuItem === 3 && <AddEntries />}
        {menuItem === 4 && <DayBook />}
        {menuItem === 5 && <Receivebles />}
        {menuItem === 6 && <Payables />}
        
        
        </div> 
      
      </div>
       </div>
    }
   
    
        </>
  )
}

export default Home
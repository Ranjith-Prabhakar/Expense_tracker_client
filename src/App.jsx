import {Routes,Route} from "react-router-dom"
import './App.css'
import SingUp from "./pages/SingUp"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path="/sign-up" element={<SingUp />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default App

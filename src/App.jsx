import { Routes, Route } from "react-router-dom";
import './App.css';
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useStore from "./store/store";
import { getLocalStorageTransactions, getLocalStorageUser } from "./utils/localStorage";

function App() {
  const loginUser = useStore(state => state.loginUser); // Access loginUser function directly from the store
const addTransactios = useStore((state) => state.addTransactios);
  // Retrieve user from localStorage
  const user = getLocalStorageUser();
  const transactions = getLocalStorageTransactions()

  // If user exists, log them in
  if (user?.userName) {
    loginUser(user);
  }
  if(transactions?.length){
    addTransactios(transactions)
  }

  return (
    <Routes>
      <Route path="/sign-up" element={<SingUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

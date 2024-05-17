import axios from 'axios'
const base_url = 'http://localhost:5000/'

export const signUp = async(userName,email,password)=>{
try {
  return await axios.post(`${base_url}auth/sign-up`,{userName,email,password})
} catch (error) {
  console.log(error.message)
}
}

export const login = async(email,password)=>{
try {
  return await axios.post(`${base_url}auth/login`,{email,password})
} catch (error) {
  console.log(error.message)
}
}

export const addMembers = async(userId,userName,email)=>{
  try {
    return await axios.post(`${base_url}auth/add-member`,{userId,userName,email})
  } catch (error) {
     console.log(error.message)
  }
}

export const addTransaction = async(userId,modeOfTransaction,party,amount,narration)=>{
  try {
    return await axios.post(`${base_url}auth/add-transaction`,{userId,modeOfTransaction,party,amount,narration})
  } catch (error) {
     console.log(error.message)
  }
}

// export const isLogedIn = async()=>{
// try {
//   return await axios.get(`${base_url}auth/isLogin`)
// } catch (error) {
//   console.log(error.message)
// }
// }
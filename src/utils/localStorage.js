
export const getLocalStorageUser = ()=>{
  return JSON.parse(localStorage.getItem("user"))
}

export const setLocalStorageUser = (user)=>{
localStorage.setItem("user",JSON.stringify(user))
}

export const setLocalStorageTransactions=(transactions)=>{
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

export const getLocalStorageTransactions = ()=>{
  return JSON.parse(localStorage.getItem("transactions"))
}

export const getLocalStorage = ()=>{
  return JSON.parse(localStorage.getItem("user"))
}

export const setLocalStorage = (user)=>{
localStorage.setItem("user",JSON.stringify(user))
}
import React, {useState} from 'react'
import { loginContext } from './LoginContext'
import axios from 'axios'
function UserLoginContextStore({children}) {

    let [currentUser,setCurrentUser]=useState({})
    let [error,setError]=useState("")
    let [userLoginStatus,setUserLoginStatus]=useState(false)
    //userLogin
    const loginUser=(userCredobj)=>{
            axios.post('http://localhost:3500/users-api/login-user',userCredobj)
            .then(response=>{
                if(response.data.message==='success'){
                        //update cuurent User
                        setCurrentUser({...response.data.user})
                        //update use login
                        setUserLoginStatus(true);
                        //store jwt token in local or session storage
                        localStorage.setItem("token",response.data.token)
                        //sessionStorage.setItem()
                }
                else{
                    setError(response.data.message)
                }
            })
            .catch()
    }

    //user logout

    const logoutUser=()=>{

    }
  return (
    <div>
        <loginContext.Provider value={[currentUser,error,userLoginStatus,loginUser,logoutUser]}>
                    {children}
        </loginContext.Provider>

    </div>
  )
}

export default UserLoginContextStore
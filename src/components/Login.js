 import React,{useState,useContext} from 'react'
 import {useForm} from 'react-hook-form'
 function Login() {


  let   {register,handleSubmit,formState:{errors}}=useForm()


  
  

  
  const handleUserLogin=(userCred)=>{
    console.log(userCred);      

  }
   return (
    <div>

<div className="w-50 mx-auto">

<form className="mx-auto" onSubmit={handleSubmit(handleUserLogin)}>
    <div className="mb-3">
    <label htmlFor="username">Username</label>
    <input type="text" id="username" className="form-control" {...register("username",{minLength:"4",maxLength:"8",required:true})}/>
    </div>
    {errors.username?.type==="required" && <p className="text-danger">*Enter atleast 1 character*</p>}
    {errors.username?.type==="minLength" && <p className="text-danger">*Min length is 4*</p>}
    {errors.username?.type==="maxLength" && <p className="text-danger">*Max length is 8*</p>}

    <div className="mb-3">
    <label htmlFor="password">Password</label>
    <input type="password" id="password" className="form-control" {...register("password",{minLength:"4",maxLength:"8",required:true})}/>
    </div>
    

    <button className="btn btn-danger">Submit</button>

    
</form>



</div>

    </div>
   )
 }
 
 export default Login
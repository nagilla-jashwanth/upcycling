import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {


  let   {register,handleSubmit,formState:{errors}}=useForm()
  let [error,setError]=useState("")
  const navigate=useNavigate();
  let addNewUser = (newUser) => {
    axios
      .post("http://localhost:3500/users-api/register-user",newUser)
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
          console.log(response);
          navigate('/login');
        }
        if (response.status !== 201) {
          setError(response.data.message);
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.message);
        } else if (err.request) {
          setError(err.message);
        } else {
          setError(err.message);
        }
      });
  };
  return (


    <div className="container">

        {errors.length!==0 && (<p className='display-3 text-danger text-center'>{error}</p>)}
    <div className="w-50 mx-auto">

        <form className="mx-auto" onSubmit={handleSubmit(addNewUser)}>
            <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" {...register("username",{minLength:"4",maxLength:"20",required:true})}/>
            </div>
            {errors.username?.type==="required" && <p className="text-danger">*Enter atleast 1 character*</p>}
            {errors.username?.type==="minLength" && <p className="text-danger">*Min length is 4*</p>}
            {errors.username?.type==="maxLength" && <p className="text-danger">*Max length is 8*</p>}

            <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="form-control" {...register("password",{minLength:"4",maxLength:"8",required:true})}/>
            </div>
           
            <div className="mb-3">

            <label htmlFor="DOB">Date of Birth</label>
            <input type="date" id="DOB" className="form-control" {...register("DOB",{required:true})}/>
            </div>
            {errors.DOB?.type==="required" && <p className="text-danger">*mandatory*</p>}

            <div className="mb-3">
            <label>Select a State</label>
            <select className="form-select" defaultValue="Default" {...register("state",{required:true})}>
                <option value="Default" disabled> Select a Option</option>
                <option value="telangana">Telangana</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="TamilNadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
            </select>
            {errors.state?.type==="required" && <p className="text-danger">*mandatory*</p>}
            </div>

            <button className="btn btn-danger">Submit</button>

            
        </form>

        

    </div>



</div>
  )
}

export default Register
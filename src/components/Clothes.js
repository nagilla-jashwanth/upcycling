import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import "./cloathes1.css";
function Clothes() {


  let   {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div className='container '>

      <div className='w-50 mx-auto'>
      <form className="mx-auto" onSubmit={handleSubmit()}>
            <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" {...register("username",{minLength:"4",maxLength:"30",required:true})}/>
            </div>
            {errors.username?.type==="required" && <p className="text-danger">*Enter atleast 1 character*</p>}
            {errors.username?.type==="minLength" && <p className="text-danger">*Min length is 4*</p>}
            {errors.username?.type==="maxLength" && <p className="text-danger">*Max length is 8*</p>}
          <div className="mb-3">
          <label htmlFor="clothes">Number of Clothes</label>
          <input type="number" id="clothes" className="form-control" {...register("clothes",{min:0,max:1000,required:true})}/>
            </div>
            {errors.plastic_bottles?.type==="required" && <p className="text-danger">*Enter 0 if not required*</p>}
            {errors.plastic_bottles?.type==="min" && <p className='text-danger'>Enter a valid number</p>}
            {errors.plastic_bottles?.type==="max" && <p className='text-danger'>Enter a valid number</p>}
        
           
            <button className='btn btn-danger' onSubmit={'Thanks for donating'}>Submit</button>
        </form>



     
      
    </div>
    </div>
  )
}

export default Clothes
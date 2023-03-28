import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
function Recycle() {



  let   {register,handleSubmit,formState:{errors}}=useForm()
  return (
    
    <div className='container'>
      <div className='w-50 mx-auto'>
      <form className="mx-auto" onSubmit={handleSubmit()}>
            <div className="mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" className="form-control" {...register("username",{minLength:"4",maxLength:"8",required:true})}/>
            </div>
            {errors.username?.type==="required" && <p className="text-danger">*Enter atleast 1 character*</p>}
            {errors.username?.type==="minLength" && <p className="text-danger">*Min length is 4*</p>}
            {errors.username?.type==="maxLength" && <p className="text-danger">*Max length is 8*</p>}
          <div className="mb-3">
          <label htmlFor="plastic_bottles">Number of plastic bottles</label>
          <input type="number" id="plastic_bottles" className="form-control" {...register("plastic_bottles",{min:0,max:1000,required:true})}/>
            </div>
            {errors.plastic_bottles?.type==="required" && <p className="text-danger">*Enter 0 if not required*</p>}
            {errors.plastic_bottles?.type==="min" && <p className='text-danger'>Enter a valid number</p>}
            {errors.plastic_bottles?.type==="max" && <p className='text-danger'>Enter a valid number</p>}
          <div className="mb-3">
          <label htmlFor="plastic_bag">Number of plastic bags</label>
          <input type="number" id="plastic_bag" className="form-control" {...register("plastic_bag",{min:0,max:1000,required:true})}/>
          </div>
          {errors.plastic_bag?.type==="required" && <p className="text-danger">*Enter 0 if not required*</p>}
          {errors.plastic_bag?.type==="min" && <p className='text-danger'>Enter a valid number</p>}
          {errors.plastic_bag?.type==="max" && <p className='text-danger'>Enter a valid number</p>}
          <div className="mb-3">
          <label htmlFor="plastic_wrappers">Number of plastic wrappers</label>
          <input type="number" id="plastic_wrappers" className="form-control" {...register("plastic_wrappers",{min:0,max:1000,required:true})}/>
          </div>
          {errors.plastic_wrappers?.type==="required" && <p className="text-danger">*Enter 0 if not required*</p>}
          {errors.plastic_wrappers?.type==="min" && <p className='text-danger'>Enter a valid number</p>}
          {errors.plastic_wrappers?.type==="max" && <p className='text-danger'>Enter a valid number</p>}
          <div className="mb-3">
          <label htmlFor="other_count">Number of other plastic items</label>
          <input type="number" id="other_count" className="form-control" {...register("other_count",{min:0,max:1000,required:true})}/>
          </div>
          {errors.other_count?.type==="required" && <p className="text-danger">*Enter 0 if not required*</p>}
          {errors.other_count?.type==="min" && <p className='text-danger'>Enter a valid number</p>}
          {errors.other_count?.type==="max" && <p className='text-danger'>Enter a valid number</p>}
          
           
            <button className='btn btn-danger'>Submit</button>
        </form>



     
      
    </div>
    </div>
  )
}

export default Recycle
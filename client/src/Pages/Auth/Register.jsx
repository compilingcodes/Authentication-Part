import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Register() {

  const [user,setUser]=useState({
    name:"",
    email:"",
    mobile:"",
    password:""
  })

  let navigate=useNavigate()

const readInput=(e)=>{
  const {name,value}=e.target
setUser({...user,[name]:value})
}

const submitHandler=async(e)=>{
  e.preventDefault()
  try {
    console.log(`register =`,user)
    await axios.post(`/api/auth/register`,user)
    .the(res=> {
      toast.success(res.data.msg)
      navigate(`/login`)
    }).catch(err=> toast.error(err.message.data.msg))
  } catch (err) {
    toast.error(err.message)
  }

}

  return (
 <div className="container">

  <div className="row">
    <div className="col-md-122 text-center">
      <h3 className="display-3 text-success">
        Register
      </h3>
    </div>
  </div>

  <div className="row">
<div className="col-md-6 offset-md-3">
  <div className="card">
    <div className="card-body">
      <form autoComplete="off" onSubmit={submitHandler}>
      
      <div className="form-group mt-2">
          <label htmlFor="name">Name</label>
<input type="text" id='name' name='name' value={user.name} onChange={readInput} className='form-control' required  />   

    </div>

        <div className="form-group mt-2">
          <label htmlFor="email">Email</label>
<input type="email" id='email' name='email' value={user.email} onChange={readInput} className='form-control' required  />   

    </div>
      
    <div className="form-group mt-2">
          <label htmlFor="mobile">Mobile</label>
<input type="number" id='mobile' name='mobile' value={user.mobile} onChange={readInput} className='form-control' required  />   

    </div>

        <div className="form-group mt-2">
          <label htmlFor="pass">Password</label>
<input type="password" id='password' name='password' value={user.password} onChange={readInput} className='form-control' required  />   

    </div>
      
        <div className="form-group mt-2">
          
<input type="submit" value="Register" onChange={readInput} className='btn btn-success' />   

    </div>

      </form>
    </div>
  </div>
</div>

  </div>
 </div>
  )
}

export default Register
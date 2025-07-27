import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
// import BACKEND_URL from '../App'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up')
  const { token , setToken , BACKEND_URL} = useContext(ShopContext)
  const navigate = useNavigate() 

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = async(e) =>{
    e.preventDefault() 
    // console.log("in func");
    
    try {

        if (currentState === 'Sign Up') {
          // Sign up api
          const response = await axios.post(BACKEND_URL+'/api/user/register',{name,email,password})
          // console.log(response.data)
          if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          } else {
            toast.error(response.data.message)
          }

        } else {
          // Login api
          const response = await axios.post(BACKEND_URL+'/api/user/login',{email,password})
          // console.log(response.data)
          if(response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          } else {
            toast.error(response.data.message)
          }
          
        }
      
    } catch (error) {
      console.log(error.message);
      toast.error(error.message)
      
    }
  }

  useEffect(()=>{
    if(token) {
      navigate('/')
    }
  },[token])


  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

      {currentState === 'Login'?'':<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='w-full flex justify-between text-sm mt-[8px]'>
        <p className='cursor-pointer'>Forget your Password?</p>
        {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button type='submit' className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer'>{currentState === 'Login'?'Sign In':'Sign Up'}</button>
    </form>
  )
}

export default Login

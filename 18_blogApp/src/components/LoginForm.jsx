import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({title}) => {
    const navigate = useNavigate();
  return (
    <div className="login-wrapper flex bg-[#F0F0F0] text-background px-20 py-16 rounded-[30px] mt-10">
    <div className='w-[55%]'>
      <h2 className='text-4xl font-semibold w-[70%]'>Ready to start working with us?</h2>
      <p className='w-[80%] mt-6'>Welcome to our courses! Join Us for exploring CodeGain skills and achieve success</p>
    </div>
    <div className='w-[45%] flex flex-col gap-3'>
      <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
      <Input  className="h-12 bg-foreground" placeholder="Email"/>
      <Input className="h-12 bg-foreground" placeholder="Password"/>
      <Button className="w-[200px] h-12"> {title}</Button>
      <span className='text-primary font-semibold underline cursor-pointer' onClick={() => navigate('/signup')}>Sign Up</span>
    </div>
   
  </div>
  )
}

export default LoginForm
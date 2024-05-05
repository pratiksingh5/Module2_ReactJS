import React from 'react'
import Form from './components/Form';
import EmailForm from './components/EmailForm';

const App = () => {
  return (
    <div className='bg-[#f1f1f1] h-screen  gap-32 flex items-center justify-center'>
      <Form/>
      <EmailForm/>
    </div>
  )
}

export default App
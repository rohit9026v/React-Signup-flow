import React from 'react'
import RHF from './components/RHF'
import Left from './components/Left'
import Login from './components/Login'

const App = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-screen' >
      <Left />
      {/* <RHF /> */}
      <Login />
    </div>
  )
}

export default App
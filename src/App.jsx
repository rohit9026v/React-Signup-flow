import React from 'react'
import Sign_up from './components/Sign_up'
import Branding from './components/Branding'
import Login from './components/Login'
import Signed_up from './components/Signed_up'
import Forgot from './components/Forgot'

const App = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-full h-screen' >
      <Branding />
      {/* <Sign_up /> */}
      {/* <Login /> */}
      {/* <Signed_up name={"Rohit"} email={"rohit9026v@gmail.com"}/> */}
      <Forgot />
    </div>
  )
}

export default App
import React, { useState } from 'react'
import Logo from '../../components/Logo'
import Navbar from '../../components/navbar/Navbar';

const Profile = () => {
    let [user, setUser] = useState({
        name:'Al Siphat', email:'alsiphat30@gmail.com'
    });
  return (
    <>
    <div className='p-3  flex flex-col items-center justify-center'>
      <Logo logo={"text-[45px] text-red-500"} />

      <div className=' w-full space-y-3 self-start'>
            <p>Name: {user.name}</p>
            <p>E-Mail: {user.email}</p>
            <button className="btn btn-wide text-white bg-red-500">Log Out</button>
            
      </div>
    </div>
    <Navbar />
    </>
  )
}

export default Profile
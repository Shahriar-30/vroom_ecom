import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-500 w-full fixed bottom-0 text-white flex justify-between items-center'>
        <p className='text-center active:bg-[rgb(0,0,0,0.3)] cursor-pointer hover:bg-[rgb(0,0,0,0.3)] w-full px-5 py-5 '>Home</p>
        <p className='text-center active:bg-[rgb(0,0,0,0.3)] cursor-pointer hover:bg-[rgb(0,0,0,0.3)] w-full px-5 py-5'>Cart</p>
        <p className='text-center active:bg-[rgb(0,0,0,0.3)] cursor-pointer hover:bg-[rgb(0,0,0,0.3)] w-full  px-5 py-5'>Profile</p>
    </div>
  )
}

export default Navbar
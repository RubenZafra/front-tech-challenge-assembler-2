import { useEffect, useState } from 'react'
import {GiFangsCircle} from 'react-icons/gi'


export const NavBar = () => {

  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(false) : setIsActive(true)
    })
  })

  return (
    <>
        <div className={`flex justify-between items-center ${isActive ? 'bg-[#27374D] py-6' : 'bg-[#526D82] py-2'} fixed z-20 w-full px-4 transition-all duration-500 ease-in-out h-26`}>
          <GiFangsCircle className='text-5xl ml-4 text-white'/>
          <h1 className='text-white font-bold text-2xl'>GIF-MASTER 🍥</h1>
          <div className='flex justify-between p-4'>
            <div className='pr-32'>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Upload Gif</button>
            </div>
            <div>
              <button 
                className="bg-blue-500 text-white px-4 ml-4 py-2 rounded-md"
                
                >
                  Login
              </button>
              <button className="bg-red-500 text-white px-4 py-2 ml-4 rounded-md">Sign Up</button>
            </div>
          </div>
        </div>
    </>
  )
}

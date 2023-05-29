import { useEffect, useState } from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css';
import {GiFangsCircle} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FiLogOut, FiUpload } from 'react-icons/fi'

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
          <Link to="/main">

          <h1 className='text-white font-bold text-5xl ml-52'>GIF-MASTER 🍥</h1>
          </Link>
          <div className='flex justify-between p-4'>
            <div className='pr-32'>
              <Link className='appearance-none' to='/upload'>
                <AwesomeButton className='text-lg' type='primary' before={<FiUpload />} size='medium' >
                    Upload
                </AwesomeButton>
              </Link>
            </div>
            <div>
              <Link className='appearance-none' to='/'>
                <AwesomeButton className='text-lg font-bold' type='danger' before={<FiLogOut />} size='medium'>Logout</AwesomeButton>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

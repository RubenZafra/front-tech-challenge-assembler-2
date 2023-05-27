import { useEffect, useState } from "react"
import styles from "../Search/search.module.scss"

export const Search = () => {

    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', () => {
          window.scrollY > 80 ? setIsActive(false) : setIsActive(true)
        })
      })
  return (
    <div className={`bg-gray-100 flex flex-col justify-center ${isActive ? ' pt-28 bg-[#557287] ' : 'pt-20 bg-[#9bb0be]'} transition-all duration-500 ease-in-out w-full fixed z-10`}>
        <div className="relative p-4 w-full sm:max-w-2xl sm:mx-auto">
            <div className="overflow-hidden z-0 rounded-full relative p-3">
            <form role="form" className="relative flex z-50 bg-white rounded-full">
                <input type="text" placeholder="enter your search here" className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"/>
                <button 
                    className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none transition-colors duration-100"
                >Search GIF
                </button>
            </form>
            <div className={`${styles.glow} ${styles.glow1} z-10 bg-pink-400 absolute`}></div>
            <div className={`${styles.glow} ${styles.glow2} z-20 bg-purple-400 absolute`}></div>
            <div className={`${styles.glow} ${styles.glow3} z-30 bg-yellow-400 absolute`}></div>
            <div className={`${styles.glow} ${styles.glow4} z-40 bg-blue-400 absolute`}></div>
            </div>
        </div>
    </div>  
)
}

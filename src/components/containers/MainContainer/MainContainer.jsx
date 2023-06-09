import { useEffect, useState } from "react";
import { GifContainer } from "../GifContainer/GifContainer"

export const MainContainer = () => {

  const [gifs, setGifs] = useState([])
  const [trendingGifs, setTrendingGifs] = useState([])
  const [classicGifs, setClassicGifs] = useState([])
  const [userGifs, setUserGifs] = useState([])

  const [filteredGifs, setFilteredGifs] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    async function getGifs() { 

      try {
        const response = await fetch('http://localhost:8080/gifs', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        setGifs(data)
    
      }catch (error) {
        console.log(error)
      }

    }
    getGifs() 
  }, [])

  useEffect(() => {
    async function getGifs() { 

      try {
        const response = await fetch('http://localhost:8080/gifs/trending', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        setTrendingGifs(data.slice(0,6))
    
      }catch (error) {
        console.log(error)
      }

    }
    getGifs() 
  }, [])

  useEffect(() => {
    async function getGifs() { 

      try {
        const response = await fetch('http://localhost:8080/gifs/classic', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        setClassicGifs(data.slice(0,6))
    
      }catch (error) {
        console.log(error)
      }

    }
    getGifs() 
  }, [])

  useEffect(() => {
    async function getGifs() { 

      try {
        const response = await fetch('http://localhost:8080/gifs/user', 
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json()
        setUserGifs(data.slice(0,6))
    
      }catch (error) {
        console.log(error)
      }

    }
    getGifs() 
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen pt-60 px-20 bg-[#DDE6ED]">
      <div >
        <ul className="flex flex-row justify-center gap-6">
          <li onClick={()=>{
            setFilteredGifs([]) 
            setTitle('')}
          } className="font-bold hover:underline hover:text-sky-900 text-xl cursor-pointer drop-shadow-lg decoration-sky-500 text-[#27374D]">Home</li>
          <li onClick={()=>{
            setFilteredGifs(trendingGifs) 
            setTitle('Trending')}
            } className="font-bold hover:underline hover:text-pink-900 text-xl cursor-pointer drop-shadow-lg decoration-pink-500 text-[#27374D]">Trending</li>
          <li onClick={()=>{
            setFilteredGifs(classicGifs)
            setTitle('Classic')
          }} className="font-bold hover:underline hover:text-indigo-900 text-xl cursor-pointer drop-shadow-lg decoration-indigo-500 text-[#27374D]">Classic</li>
        </ul>
      </div>
      {
        filteredGifs.length > 0 &&
        <GifContainer title={title} gifs={filteredGifs} />
      }
      
      {
        userGifs && filteredGifs.length === 0 && 
        <GifContainer title="Uploaded By User" gifs={userGifs} />

      }
      {
        trendingGifs && filteredGifs.length === 0 && 
        <GifContainer title="Trending" gifs={trendingGifs} />

      }
      {
        classicGifs && filteredGifs.length === 0 && 
        <GifContainer title="Classic" gifs={classicGifs} />

      }
      {
        gifs && filteredGifs.length === 0 &&
        <GifContainer title="General" gifs={gifs} />

      }
        
        
    </div>
  )
}

import { useEffect, useState } from "react";
import { GifContainer } from "../GifContainer/GifContainer"

export const MainContainer = () => {

  const [gifs, setGifs] = useState([])
  const [trendingGifs, setTrendingGifs] = useState([])
  const [classicGifs, setClassicGifs] = useState([])
  const [userGifs, setUserGifs] = useState([])

  const [filteredGifs, setFilteredGifs] = useState([])

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
          <li onClick={()=>setFilteredGifs([])} className="font-bold hover:underline text-xl cursor-pointer drop-shadow-lg text-[#27374D]">Home</li>
          <li onClick={()=>setFilteredGifs(trendingGifs)} className="font-bold hover:underline text-xl cursor-pointer drop-shadow-lg text-[#27374D]">Trending</li>
          <li onClick={()=>setFilteredGifs(classicGifs)} className="font-bold hover:underline text-xl cursor-pointer drop-shadow-lg text-[#27374D]">Classic</li>
        </ul>
      </div>
      {
        filteredGifs.length > 0 &&
        <GifContainer title="Search Results" gifs={filteredGifs} />
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

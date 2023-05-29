import { useEffect, useState } from "react";
import { GifContainer } from "../GifContainer/GifContainer"

export const MainContainer = () => {

  const [gifs, setGifs] = useState([])
  const [trendingGifs, setTrendingGifs] = useState([])
  const [classicGifs, setClassicGifs] = useState([])
  const [userGifs, setUserGifs] = useState([])

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
        setTrendingGifs(data.slice(0,5))
    
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
        setClassicGifs(data.slice(0,5))
    
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
        setUserGifs(data.slice(0,5))
    
      }catch (error) {
        console.log(error)
      }

    }
    getGifs() 
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen pt-60 px-20 bg-[#DDE6ED]">
      {
        userGifs ? 
        <GifContainer title="Trending" gifs={userGifs} />
        :
        <h2>loading...</h2>
      }
      {
        trendingGifs ? 
        <GifContainer title="Trending" gifs={trendingGifs} />
        :
        <h2>loading...</h2>
      }
      {
        classicGifs ? 
        <GifContainer title="Classic" gifs={classicGifs} />
        :
        <h2>loading...</h2>
      }
      {
        gifs ? 
        <GifContainer title="General" gifs={gifs} />
        :
        <h2>loading...</h2>
      }
        
        
    </div>
  )
}

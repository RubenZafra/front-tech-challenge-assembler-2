import { GifContainer } from "../GifContainer/GifContainer"

export const MainContainer = () => {

  const gifs = [
    {
      title: "Hamburguesa",
      url: "https://media.giphy.com/media/A9XJR7LtgVsmA99ij1/giphy.gif"
    }, 
    {
      title: "Animal",
      url: "https://media.giphy.com/media/2s5AkMqz68euLmWqhb/giphy.gif"
    },
    {
      title: "Cocina",
      url: "https://media.giphy.com/media/BDSZj7aLlvE7MXa90V/giphy.gif"
    }
  ]
  return (
    <div className="flex flex-col min-h-screen pt-60 px-20 bg-[#DDE6ED]">
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        {/* <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} />
        <GifContainer title="Gifs de hamburguesas" gifs={gifs} /> */}
        
        
    </div>
  )
}

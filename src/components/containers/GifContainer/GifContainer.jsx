/* eslint-disable react/prop-types */
import { GifCard } from "../../common/GifCard/GifCard"

export const GifContainer = ({title, gifs}) => {

  return (
    <div className="flex flex-col px-64 py-12">
        <h2 className="text-2xl font-bold text-start mb-4">{title}</h2>
        <div className="flex flex-wrap justify-start items-center gap-4 ">
            {
                gifs ? gifs.map(gif => (
                    <GifCard key={gif._id} gif={gif.url}/>
                )
                ) : <p>Loading...</p>
            }
        </div>
    </div>
  )
}

import { Link } from "react-router-dom"
import { BsHeart } from "react-icons/bs"
import { ImLink } from "react-icons/im"
       
       
export const GifCard = ({gif}) => {
    return (
        <div>
            <div className="max-h-content 
            mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-content h-content mx-auto flex justify-center items-center">
                        <img className="max-w-[300px] max-h-[200px] object-cover group-hover:scale-105 
                        transition duration-300 " 
                        src={gif} 
                        alt="" 
                        />
                    </div>
                </div>   
                <div className="absolute top-0 right-0 group-hover:right-5 flex flex-row 
                items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 
                transition-all duration-300">
                    <button>
                    <div className="flex justify-center items-center text-white
                    w-8 h-12">
                        <BsHeart className="text-2xl text-red-500 font-bold hover:scale-105 
                        transition duration-300"/>
                    </div>
                    </button>
                    <Link to={`/main`} className="w-8 h-12 flex justify-center
                    items-center text-primary drop-shadow-xl">
                    <ImLink className="text-xl hover:scale-105 transition duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
    
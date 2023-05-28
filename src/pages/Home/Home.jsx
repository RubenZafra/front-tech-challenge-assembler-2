import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center">GIF MASTER</h1>
        <button>
          <Link to="main">Start The fun!!</Link>
        </button>
    </div>
  )
}

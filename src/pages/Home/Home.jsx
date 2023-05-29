import { Link } from "react-router-dom"
import { FiZap} from "react-icons/fi"
import { AwesomeButton } from "react-awesome-button"
import { BackgroundAnimated } from "../../components/common/AnimatedBackground/AnimatedBackground"
import { toast } from "react-hot-toast"

export const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-[#27374D]">
          <h1 className="text-6xl font-bold text-center text-white">GIF MASTER</h1>
          <Link to="main" onClick={()=>toast.success("WELCOME! Let's get started!", {icon: "🍕"})}>
            <AwesomeButton type="primary" before={<FiZap />} size="large" ripple={true} className="mt-8">
              Start The fun!!
            </AwesomeButton>
          </Link>
      </div>
      <BackgroundAnimated />
    </>
  )
}

import { Link } from "react-router-dom"
import { FiZap} from "react-icons/fi"
import { AwesomeButton } from "react-awesome-button"
import { BackgroundAnimated } from "../../components/common/AnimatedBackground/AnimatedBackground"

export const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-[#27374D]">
          <h1 className="text-6xl font-bold text-center text-white">GIF MASTER</h1>
          <Link to="main">
            <AwesomeButton type="primary" before={<FiZap />} size="large" ripple={true} className="mt-8">
              Start The fun!!
            </AwesomeButton>
          </Link>
      </div>
      <BackgroundAnimated />
    </>
  )
}

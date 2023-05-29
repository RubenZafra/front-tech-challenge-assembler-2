import { AwesomeButton } from "react-awesome-button"
import { Link } from "react-router-dom"

export const UploadContainer = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 pt-60 flex flex-col justify-center items-center gap-6">

        <Link to="/upload/url" >
          <AwesomeButton type='primary' className="text-3xl h-20 w-72" >
            Upload with URL
          </AwesomeButton>
        </Link>
        <Link to="/upload/file" >
          <AwesomeButton type='secondary' className="text-3xl h-20 w-72" >
            Upload with File
          </AwesomeButton>
        </Link>
        
    </div>
  )
}

import { Link } from "react-router-dom"

export const UploadContainer = () => {
  return (
    <div className="h-screen w-screen bg-gray-200 pt-60 flex flex-col justify-center items-center">

        <Link to="/upload/url" >Upload with URL</Link>
        <Link to="/upload/file" >Upload with File</Link>
        
    </div>
  )
}

import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from '../pages/Home/Home.jsx'
import { Main } from '../pages/Main/Main.jsx'
import { UploadGif } from '../pages/Upload/Upload.jsx'
import { UploadGifUrl } from '../components/containers/UploadGifUrl/UploadGifUrl.jsx'
import { UploadGifFile } from '../components/containers/UploadGifFile/UploadGifFile.jsx'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/upload" element={<UploadGif />} />
          <Route path="/upload/url" element={<UploadGifUrl />} />
          <Route path="/upload/file" element={<UploadGifFile />} />

      </Routes>
    </BrowserRouter>
  )
}

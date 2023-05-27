import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from '../pages/Home/Home'
import { Main } from '../pages/Main/Main'
import { NavBar } from '../components/containers/NavBar/NavBar'
import { Footer } from '../components/common/Footer/Footer'

export const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/upload" element={<Upload />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

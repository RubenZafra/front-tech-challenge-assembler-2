import { Footer } from "../../components/common/Footer/Footer"
import { Search } from "../../components/common/Search/Search"
import { MainContainer } from "../../components/containers/MainContainer/MainContainer"
import { NavBar } from '../../components/containers/NavBar/NavBar'

export const Main = () => {
  return (
    <>
        <NavBar />
        <Search />
        <MainContainer />
        <Footer />
    </>
  )
}

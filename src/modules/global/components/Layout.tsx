
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import BottomResponsiveMenu from './BottomResponsiveMenu'

const Layout = () => {
  return (
    <div>
        <Header />
        <BottomResponsiveMenu/>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout
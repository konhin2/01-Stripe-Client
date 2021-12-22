import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div>
            <header>Navbar</header>
            <Outlet/>
        </div>
    )
}

export default Layout

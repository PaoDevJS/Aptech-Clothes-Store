import { Outlet } from "react-router-dom"
import SideBar from "../component/SideBar"
import TopBar from "../component/TopBar"

const Layout = () => {
  return (
    <div className="flex">
        <div className="xl:w-[20%] md:w-[25%] w-[30%] h-[100vh]">
            <SideBar />
        </div>
        <div className="xl:w-[80%] md:w-[75%] w-[70%]">
            <TopBar />
            <Outlet />
        </div>
    </div>
  )
}

export default Layout
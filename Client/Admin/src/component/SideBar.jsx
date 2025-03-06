import { Link, useLocation } from "react-router-dom"
import avatar from "../assets/image/avatar.jpg"
// react icons
import { MdOutlineDashboard } from "react-icons/md"
import { FaListOl, FaShoppingCart } from "react-icons/fa"
import { GiClothes } from "react-icons/gi"
import { FaUsers } from "react-icons/fa6"

const SideBar = () => {
  const ListSideBar = [
    {title: "Tổng quan", path: "/", icon: <MdOutlineDashboard size={25}/>},
    {title: "Quản lý thể loại", path: "/category/list-categories", icon: <FaListOl size={25}/>},
    {title: "Quản lý thương hiệu", path: "/brand/list-brands", icon: <FaListOl size={25}/>},
    {title: "Quản lý kích cỡ", path: "/size/list-sizes", icon: <FaListOl size={25}/>},
    {title: "Quản lý màu sắc", path: "/color/list-colors", icon: <FaListOl size={25}/>},
    {title: "Quản lý sản phẩm", path: "/product/list-products", icon: <GiClothes size={25}/>},
    {title: "Quản lý đơn hàng", path: "/order/list-orders", icon: <FaShoppingCart size={25}/>},
    {title: "Quản lý khách hàng", path: "/customer/list-customers", icon: <FaUsers size={25}/>},
  ]

  const location = useLocation().pathname
  const path = location.split("/")[1]

  return (
    <div className="fixed top-0 left-0 xl:w-[20%] md:w-[25%] w-[30%] h-full bg-Primary">
      <div className="w-full h-full py-7 flex flex-col gap-10">
        {/* Logo */}
        <div className="pb-7 border-b border-gray-300 flex gap-5 items-center px-7">
          <img src={avatar} alt="Avatar" className="w-13 h-13 rounded-full"/>
          <div className="">
            <h1 className="text-lg font-bold text-white">Mr.Pao</h1>
            <p className="text-gray-300 font-[500]">Admin</p>
          </div>
        </div>

        {/* List item */}
          <ul className="flex flex-col gap-5 pl-5">
            {
              ListSideBar.map((item, index) => {
                return (
                  <li className={` ${path === item.path.split("/")[1]? "bg-White text-black" : "text-white"} py-3 px-7 rounded-l-full hover:bg-White transition duration-200 ease-in hover:text-black`} key={index}>
                    <Link to={item.path} className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-[16px] font-[700]">{item.title}</span> 
                    </Link>
                  </li>
                )
              })
            }
          </ul>
      </div>
    </div>
  )
}

export default SideBar

// react icons
import { Link, Outlet, useLocation } from "react-router-dom"

const LayoutProduct = () => {
    const ListCategories = [
        {path: "/product/list-products", title: "All Products"},
        {path: "/product/create-product", title: "Create Product"}
    ]

    const location = useLocation().pathname
    const path = location.split("/")[2]
  return (
    <div className="w-full h-full py-5 px-10"> 
        <ul className="flex items-center gap-5"> 
            {
                ListCategories.map((item, index) => {
                    return (
                        <li key={index} className={`${path === item.path.split('/')[2]? "text-[16px] font-[500] border-b-2 px-2" : "" }`}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>

        {/* content */}
        <div className="w-full my-7">
            <Outlet />
        </div>
    </div>
  )
}

export default LayoutProduct
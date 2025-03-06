import { Link } from "react-router-dom"
// import { useEffect, useState } from "react"

// react icons
import { FaBell } from "react-icons/fa6"
import { FaUser } from "react-icons/fa"
import { RiLogoutCircleRLine } from "react-icons/ri"


const TopBar = () => {
  // const [scroll, setScroll] = useState(null)

  // useEffect(() => {
  //   window.addEventListener("scroll", (vail) => {
  //     const height = vail.target.defaultView.pageYOffset
  //     if(height > 0) {
  //       setScroll(1)
  //     } else {

  //       setScroll(2)
  //     }

  //   })

  // }, [setScroll])

  console.log(scroll)
  return (
    <div className={`py-4 px-10 bg-White shadow-md shadow-gray-300`}>
      <div className="flex items-center justify-between">
        {/* TopBar Left */}
        <div className="bg-gradient-to-l to-gray-400 from-red-600 py-2 px-5 rounded-md ">
          <h1 className="text-3xl uppercase text-white font-bold">Chot<span className="text-[16px]">Store</span></h1>
        </div>

        {/* TopBar Right */}
        <div className="flex items-center gap-7">
          <div className="relative cursor-pointer">
            <FaBell size={20} />
            <p className="absolute top-[-5px] right-[-5px] bg-Primary w-[17px] h-[17px] flex items-center justify-center text-White rounded-full">
              2
            </p>
          </div>

          {/* information */}
          <div className="relative group">
            <img src="" alt="" className="w-[30px] h-[30px] rounded-full bg-Primary cursor-pointer"/>

            <ul className="absolute right-[-50%] top-[50%] translate-y-[20%] py-3 hidden group-hover:flex px-5 rounded-md flex-col gap-2 bg-White shadow-md border border-Gray">
              <li className="py-2 bg-Primary px-7 rounded-md text-white">
                <Link className="flex items-center gap-3 text-lg"> <FaUser/>  <span className="font-[500]">Profile</span> </Link>
              </li>
              <li className="py-2 bg-Primary px-7 rounded-md text-white">
                <button className="flex items-center gap-3 text-lg cursor-pointer"> <RiLogoutCircleRLine /> <span>LogOut</span> </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
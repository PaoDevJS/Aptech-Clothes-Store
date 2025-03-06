import { Link } from "react-router-dom"

// react icons
import { FaLongArrowAltLeft } from "react-icons/fa"

const Profile = () => {
  return (
    <div className="w-full h-full bg-White py-5 px-10">
        {/* button left */}
        <button>
            <Link to={"/"} className="flex items-center gap-1 text-Gray hover:text-black">
                <FaLongArrowAltLeft size={18}/>
                <span className="font-[500]">Back</span>
            </Link>
        </button>

        {/* Hồ sơ */}
        <div className="w-[50%] m-auto py-5 px-10">
            {/* title */}
            <div className="text-center pb-5 mb-7 border-b border-gray-300">
                <h1 className="text-2xl font-bold">Hồ sơ của tôi</h1>
                <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            {/* information */}
            <div>
                {/* image */}
                <div>

                </div>

                {/* content */}
                <ul className="flex flex-col gap-5 w-[70%] m-auto">
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Name:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">Admin Panel</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Email:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">adminpanel@gmail.com</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Phone:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">09696028560</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Sex:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">Men</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Birthday:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">23/05/2004</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <h1 className="text-Gray text-[16px] font-[500] w-[20%]">Position:</h1> <span className="flex-1 border border-gray-300 py-2 px-4 rounded text-Gray text-[16px]">Admin</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile
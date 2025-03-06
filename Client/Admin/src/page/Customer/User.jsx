import { Link } from "react-router-dom"
// react icons
import { FaSearch, FaEye } from "react-icons/fa"

const User = () => {
  return (
    <div className="py-5 px-10 w-full h-full">
      <div className="flex flex-col gap-7 w-full h-full shadow-lg shadow-red-300 py-4 px-7 rounded-md">
          <form>
              <div className="flex items-center gap-3 w-[50%] border border-gray-300 rounded-md py-2 px-3">
                  <FaSearch size={20} className="text-gray-500"/>
                  <input type="text" placeholder="Search here..." className="outline-none w-full placeholder:font-[500]"/>
              </div>
          </form>

          <div>
            <table className="table-fixed w-full  bg-blue-300 rounded-md">
                <thead className="uppercase bg-red-500">
                    <tr>
                        <th className="w-[5%] py-2">ID</th>
                        <th className="w-[20%] py-2">Name</th>
                        <th className="w-[30%] py-2">Email</th>
                        <th className="w-[20%] py-2">Phone</th>
                        <th className="w-[15%] py-2">Status</th>
                        <th className="w-[10%] py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-[#f2f2f2] even:#ffffff">
                        <td className="text-center py-3">#1</td>
                        <td className="text-center py-3"> Hoodie</td>
                        <td className="text-center py-3"> Hoodie</td>
                        <td className="text-center py-3"> Hoodie</td>
                        <td className="text-center py-3"> Hoodie</td>
                        <td className="py-3 text-center">
                            <button className="bg-violet-200 rounded p-2 cursor-pointer text-violet-600">
                              <Link to={`/customer/detail-customer/:id`}> <FaEye size={16}/> </Link>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
      </div>
    </div>
  )
}

export default User
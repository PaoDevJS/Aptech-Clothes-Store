import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { ThemeApp } from "../../../context/ThemeContext";
import axios from "axios";
import { toast } from "react-toastify";

// react icons
import { FaSearch, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ListBrands = () => {
  const { brands, setBrands } = useContext(ThemeApp);
  const [search, setSearch] = useState("");
  const UrlFetchGetAllBrands = "http://localhost:2004/api/brand/get-all-brand";
  const UrlFetchDeleteBrands = "http://localhost:2004/api/brand/delete-brand/";

  const FetchApiGetAllBrands = async () => {
    try {
      const result = await axios.get(`${UrlFetchGetAllBrands}`);
      const decode = result.data;
      setBrands(decode.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    FetchApiGetAllBrands();
  }, []);

  const handleDeleteBrand = async (id) => {
    try {
      const result = await axios.delete(`${UrlFetchDeleteBrands}${id}`);
      FetchApiGetAllBrands();
      toast.success(result.data.message);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="flex flex-col gap-7 w-full h-full shadow-lg shadow-red-300 py-4 px-7 rounded-md">
      <form>
        <div className="flex items-center gap-3 w-[50%] border border-gray-300 rounded-md py-2 px-3">
          <FaSearch size={20} className="text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(vail) => setSearch(vail.target.value)}
            placeholder="Search here..."
            className="outline-none w-full placeholder:font-[500]"
          />
        </div>
      </form>

      <div>
        <table className="table-fixed w-full rounded-md">
          <thead className="uppercase bg-red-500">
            <tr>
              <th className="w-[10%] py-2">ID</th>
              <th className="w-[60%] py-2">Name</th>
              <th className="w-[30%] py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {brands
              ?.filter((vail) =>
                vail.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((item, index) => {
                return (
                  <tr key={index} className="odd:bg-[#f2f2f2] even:#ffffff">
                    <td className="text-center py-3">#{index + 1}</td>
                    <td className="text-center py-3"> {item.name} </td>
                    <td>
                      <div className="flex items-center justify-center gap-3">
                        <button className="bg-green-200 rounded p-2 cursor-pointer text-green-600">
                          <Link to={`/brand/update-brand/${item._id}`}>
                            <FaRegEdit size={16} />
                          </Link>
                        </button>
                        <button
                          onClick={() => handleDeleteBrand(item._id)}
                          className="bg-red-200 rounded p-2 cursor-pointer text-red-600"
                        >
                          <MdDelete size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListBrands;

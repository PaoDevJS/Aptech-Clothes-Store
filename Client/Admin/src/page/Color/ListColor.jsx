import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { ThemeApp } from "../../../context/ThemeContext";

// react icons
import { FaSearch, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const ListColor = () => {
  const { colors, setColors } = useContext(ThemeApp);
  const [search, setSearch] = useState("");
  const UrlFetchApiGet = `http://localhost:2004/api/color/get-all-colors`;
  const UrlFetchApiDelete = `http://localhost:2004/api/color/delete-color`;

  const FetchApiColors = async () => {
    try {
      const result = await axios.get(`${UrlFetchApiGet}`);
      const category = result.data;
      setColors(category.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    FetchApiColors();
  }, []);

  const handleDeleteItem = async (vail) => {
    try {
      const result = await axios.delete(`${UrlFetchApiDelete}/${vail}`);
      FetchApiColors();
      toast.success(result.data.message);
    } catch (err) {
      console.log(err.response.data);
    }
  };
  console.log(search);
  return (
    <div className="flex flex-col gap-7 w-full h-full shadow-lg shadow-red-300 py-4 px-7 rounded-md">
      <form>
        <div className="flex items-center gap-3 w-[50%] border border-gray-300 rounded-md py-2 px-3">
          <FaSearch size={20} className="text-gray-500" />
          <input
            type="text"
            value={search}
            onChange={(vail) => setSearch(vail.target.value)}
            placeholder="Tìm kiếm tại đây..."
            className="outline-none w-full placeholder:font-[500]"
          />
        </div>
      </form>

      <div>
        <table className="table-fixed w-full">
          <thead className="uppercase bg-red-500">
            <tr>
              <th className="w-[10%] py-2">STT</th>
              <th className="w-[60%] py-2">Tên màu sắc</th>
              <th className="w-[30%] py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {colors
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
                          <Link to={`/color/update-color/${item._id}`}>
                            <FaRegEdit size={16} />
                          </Link>
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item._id)}
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

export default ListColor;

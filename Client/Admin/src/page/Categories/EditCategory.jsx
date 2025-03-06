import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const EditCategory = () => {
  const [category, setCategory] = useState()
  const [errCategory, setErrCategory] = useState(false)
  const [message, setMessage] = useState("")
  const UrlUpdateCategory = "http://localhost:2004/api/category/update-category/"
  const UrlFetchApiGetItemCategory = "http://localhost:2004/api/category/get-item-category/"
  const navigate = useNavigate()

  const location = useLocation().pathname
  const id = location.split("/")[3]

  const existCategory = () => {
    if(!category) {
      setErrCategory(true)
      setMessage("Vui lòng không để trống trường này.")
      return
    }

    setErrCategory(false)
    setMessage("")
  }

  useEffect(() => {
    const FetchApiGetItemCategory = async () => {
      try {
        const result = await axios.get(`${UrlFetchApiGetItemCategory}${id}`)
        const vail = result.data
        setCategory(vail.data.name)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    FetchApiGetItemCategory()
  }, [id])

  console.log(id)

  const handleSubmitUpdateCategory = async e => {
    e.preventDefault()
    existCategory()

    try {
      const result = await axios.put(`${UrlUpdateCategory}${id}`, {
        name: category
      })
      const data = result.data
      console.log(data)
      setErrCategory(false)
      setMessage("")
      navigate(`/category/list-categories`)
      toast.success(data.message)

    } catch (err) {
      const error = err.response.data
      setErrCategory(true)
      setMessage(error.message)
      toast.error(message)
    }
  }

  return (
    <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Cập nhật thể loại</h1>
        <form>
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name"  className="text-[16px] w-[30%] font-[500] text-Gray">Tên thể loại:</label>
                <input type="text" onChange={(vail) => setCategory(vail.target.value)} value={category} name="category" id="name" placeholder="Nhập tên tại đây..." className={` w-full outline-none rounded-md py-3 px-4 ${errCategory? "border border-red-600" : "border border-Gray"}`}/>
                <small className={`absolute bottom-[-25px] left-[37%] translate-x-[-37%] ${errCategory? "block text-red-600" : "hidden"}`}>{message}</small>
            </div>

            <button onClick={handleSubmitUpdateCategory} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Cập nhật</button>
        </form>
    </div>
  )
}

export default EditCategory
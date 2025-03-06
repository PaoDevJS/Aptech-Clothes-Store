import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const UpdateSize = () => {
  const [size, setSize] = useState()
  const [errSize, setErrSize] = useState(false)
  const [message, setMessage] = useState("")
  const UrlUpdateSize = "http://localhost:2004/api/size/update-size/"
  const UrlFetchApiGetItemSize = "http://localhost:2004/api/size/get-item-size/"
  const navigate = useNavigate()

  const location = useLocation().pathname
  const id = location.split("/")[3]

  const existSize = () => {
    if(!size) {
      setErrSize(true)
      setMessage("Vui lòng không để trống trường này.")
      return
    }

    setErrSize(false)
    setMessage("")
  }

  useEffect(() => {
    const FetchApiGetItemSize = async () => {
      try {
        const result = await axios.get(`${UrlFetchApiGetItemSize}${id}`)
        const vail = result.data
        setSize(vail.data.name)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    FetchApiGetItemSize()
  }, [id])

  const handleSubmitUpdateSize = async e => {
    e.preventDefault()
    existSize()

    try {
      const result = await axios.put(`${UrlUpdateSize}${id}`, {
        name: size
      })
      const data = result.data
      setErrSize(false)
      setMessage("")
      navigate(`/size/list-sizes`)
      toast.success(data.message)

    } catch (err) {
      const error = err.response.data
      setErrSize(true)
      setMessage(error.message)
      toast.error(message)
    }
  }

  return (
    <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Cập nhật kích cỡ</h1>
        <form>
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name"  className="text-[16px] w-[30%] font-[500] text-Gray">Tên kích cỡ:</label>
                <input type="text" onChange={(vail) => setSize(vail.target.value)} value={size} name="size" id="name" placeholder="Nhập kích cỡ tại đây..." className={` w-full outline-none rounded-md py-3 px-4 ${errSize? "border border-red-600" : "border border-Gray"}`}/>
                <small className={`absolute bottom-[-25px] left-[37%] translate-x-[-37%] ${errSize? "block text-red-600" : "hidden"}`}>{message}</small>
            </div>

            <button onClick={handleSubmitUpdateSize} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Cập nhật</button>
        </form>
    </div>
  )
}

export default UpdateSize
import axios from "axios"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

const UpdateColor = () => {
  const [color, setColor] = useState()
  const [errColor, setErrColor] = useState(false)
  const [message, setMessage] = useState("")
  const UrlUpdateColor = "http://localhost:2004/api/color/update-color/"
  const UrlFetchApiGetItemColor = "http://localhost:2004/api/color/get-item-color/"
  const navigate = useNavigate()

  const location = useLocation().pathname
  const id = location.split("/")[3]

  const existColor = () => {
    if(!color) {
      setErrColor(true)
      setMessage("Vui lòng không để trống trường này.")
      return
    }

    setErrColor(false)
    setMessage("")
  }

  useEffect(() => {
    const FetchApiGetItemcolor = async () => {
      try {
        const result = await axios.get(`${UrlFetchApiGetItemColor}${id}`)
        const vail = result.data
        setColor(vail.data.name)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    FetchApiGetItemcolor()
  }, [id])

  const handleSubmitUpdateColor = async e => {
    e.preventDefault()
    existColor()

    try {
      const result = await axios.put(`${UrlUpdateColor}${id}`, {
        name: color
      })
      const data = result.data
      setErrColor(false)
      setMessage("")
      navigate(`/color/list-colors`)
      toast.success(data.message)

    } catch (err) {
      const error = err.response.data
      setErrColor(true)
      setMessage(error.message)
      toast.error(message)
    }
  }

  return (
    <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Cập nhật màu sắc</h1>
        <form>
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name"  className="text-[16px] w-[30%] font-[500] text-Gray">Tên màu sắc:</label>
                <input type="text" onChange={(vail) => setSize(vail.target.value)} value={color} name="size" id="name" placeholder="Nhập màu sắc tại đây..." className={` w-full outline-none rounded-md py-3 px-4 ${errColor? "border border-red-600" : "border border-Gray"}`}/>
                <small className={`absolute bottom-[-25px] left-[37%] translate-x-[-37%] ${errColor? "block text-red-600" : "hidden"}`}>{message}</small>
            </div>

            <button onClick={handleSubmitUpdateColor} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Cập nhật</button>
        </form>
    </div>
  )
}

export default UpdateColor
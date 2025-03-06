import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const CreateColor = () => {
  const [color, setColor] = useState()
  const [errColor, setErrColor] = useState(false)
  const [message, setMessage] = useState("")

  const PostFetchApiCreateColor = async () => {
    try {
      const result = await axios.post("http://localhost:2004/api/color/create-color", {
        name: color
      })
      const data = result.data
      setErrColor(false)
      setMessage("")
      setColor("")
      toast.success(data.message)

    } catch (err) {
      console.log(err.response.data)
      const error = err.response.data
      if(error.message === "Đã tồn tại.") {
        setErrColor(true)
        setMessage(error.message)
        return
    }
      setErrColor(true)
      setMessage(error.message)
      toast.error(message)
    }
  }

  const existColor = () => {
    if(!color) {
      setErrColor(true)
      setMessage("Vui lòng không để trống trường này.")
      return
    }

    setErrColor(false)
    setMessage("")
    PostFetchApiCreateColor()
  }

  const handleSubmitCreateColor = async e => {
    e.preventDefault()

    existColor()
  }

  return (
    <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Thêm màu sắc</h1>
        <form>
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name"  className="text-[16px] w-[30%] font-[500] text-Gray">Tên màu sắc:</label>
                <input type="text" onChange={(vail) => setColor(vail.target.value)} value={color} name="Color" id="name" placeholder="Nhập màu sắc tại đây..." className={` w-full outline-none rounded-md py-3 px-4 ${errColor? "border border-red-600" : "border border-Gray"}`}/>
                <small className={`absolute bottom-[-25px] left-[37%] translate-x-[-37%] ${errColor? "block text-red-600" : "hidden"}`}>{message}</small>
            </div>

            <button onClick={handleSubmitCreateColor} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Thêm</button>
        </form>
    </div>
  )
}

export default CreateColor
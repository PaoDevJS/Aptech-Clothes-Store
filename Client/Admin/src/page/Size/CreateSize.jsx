import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

const CreateSize = () => {
  const [size, setSize] = useState()
  const [errSize, setErrSize] = useState(false)
  const [message, setMessage] = useState("")

  const PostFetchApiCreateSize = async () => {
    try {
      const result = await axios.post("http://localhost:2004/api/size/create-size", {
        name: size
      })
      const data = result.data
      setErrSize(false)
      setMessage("")
      setSize("")
      toast.success(data.message)

    } catch (err) {
      console.log(err.response.data)
      const error = err.response.data
      if(error.message === "Đã tồn tại.") {
        setErrSize(true)
        setMessage(error.message)
        return
    }
      setErrSize(true)
      setMessage(error.message)
      toast.error(message)
    }
  }

  const existSize = () => {
    if(!size) {
      setErrSize(true)
      setMessage("Vui lòng không để trống trường này.")
      return
    }

    setErrSize(false)
    setMessage("")
    PostFetchApiCreateSize()
  }

  const handleSubmitCreateSize = async e => {
    e.preventDefault()

    existSize()
  }

  return (
    <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Thêm kích cỡ</h1>
        <form>
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name"  className="text-[16px] w-[30%] font-[500] text-Gray">Tên kích cỡ:</label>
                <input type="text" onChange={(vail) => setSize(vail.target.value)} value={size} name="size" id="name" placeholder="Nhập kích cỡ tại đây..." className={` w-full outline-none rounded-md py-3 px-4 ${errSize? "border border-red-600" : "border border-Gray"}`}/>
                <small className={`absolute bottom-[-25px] left-[37%] translate-x-[-37%] ${errSize? "block text-red-600" : "hidden"}`}>{message}</small>
            </div>

            <button onClick={handleSubmitCreateSize} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Thêm</button>
        </form>
    </div>
  )
}

export default CreateSize
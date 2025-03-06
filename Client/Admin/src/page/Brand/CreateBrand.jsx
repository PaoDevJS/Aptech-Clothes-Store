import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"


const CreateBrand = () => {
    const [brand, setBrand] = useState("")
    const [errBrand, setErrBrand] = useState(false)
    const [mess, setMess] = useState("")
    const UrlFetchApiPostCreateBrand = "http://localhost:2004/api/brand/create-brand"

    const PostFetchApiCreateBrand = async () => {
        try {
            const result = await axios.post(`${UrlFetchApiPostCreateBrand}`, { name: brand })
            const decode = result.data
            setErrBrand(false)
            setMess("")
            setBrand("")
            toast.success(decode.message)
        } catch (err) {
            const error = err.response.data
            console.log(error)
            if(error.message === "Đã tồn tại.") {
                setMess(error.message)
                setErrBrand(true)
                return
            }

            setMess(error.message)
            setErrBrand(true)
            toast.error(mess)
        }
    }

    const existBrand = () => {
        if(!brand) {
            setMess("Vui lòng không để trống trường này.")
            setErrBrand(true)
            return
        }

        setMess("")
        setMess(false)
        PostFetchApiCreateBrand()
    }

    const handleSubmitCreateBrand = async vail => {
        vail.preventDefault()

        // Kiểm tra rỗng
        existBrand()
    }

    return (
        <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
            <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Thêm thương hiệu mới</h1>
            <form>
                <div className="flex items-center gap-5 relative">
                    <label htmlFor="name" className="text-[16px] font-[500] text-Gray w-[30%]">Tên thương hiệu:</label>
                    <input type="text" value={brand} onChange={vail => setBrand(vail.target.value)} id="name" placeholder="Nhập thương hiệu tại đây..." className={`w-full border outline-none rounded-md py-2 px-4 ${errBrand? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}/>
                    <small className={`${errBrand? "absolute bottom-[-22px] left-[37%] translate-x-[-37%] text-red-600" : "hidden"}`}>{mess}</small>
                </div>
    
                <button onClick={handleSubmitCreateBrand} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Thêm mới</button>
            </form>
        </div>
      )
}

export default CreateBrand
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"


const UpdateBrand = () => {
    const [brand, setBrand] = useState("")
    const [errBrand, setErrBrand] = useState(false)
    const [mess, setMess] = useState("")
    const UrlFetchApiUpdateBrand = "http://localhost:2004/api/brand/update-brand/"
    const UrlFetchApiGetItemBrand = "http://localhost:2004/api/brand/get-item-brand/"
    const path = useLocation().pathname
    const id = path.split("/")[3]
    const navigate = useNavigate()

    const UpdateFetchApiCreateBrand = async () => {
        try {
            const result = await axios.put(`${UrlFetchApiUpdateBrand}${id}`, { name: brand })
            const decode = result.data
            setErrBrand(false)
            setMess("")
            navigate("/brand/list-brands")
            toast.success(decode.message)
        } catch (err) {
            const error = err.response.data
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
        UpdateFetchApiCreateBrand()
    }

    const handleSubmitCreateBrand = async vail => {
        vail.preventDefault()

        // Kiểm tra rỗng
        existBrand()
    }

    useEffect(() => {
        const FetchApiGetItem = async () => {
            try {
                const result = await axios.get(`${UrlFetchApiGetItemBrand}${id}`)
                const decode = result.data
                setBrand(decode.data.name)
            } catch (error) {
                console.log(error.response.data)
            }
        }

        FetchApiGetItem()
    }, [id, setBrand])

    return (
        <div className="xl:w-[60%] md:w-[80%] w-full m-auto py-5 px-10 rounded-md">
            <h1 className="text-2xl font-bold text-[#898989] text-center mb-16">Cập nhật thương hiệu</h1>
            <form>
                <div className="flex items-center gap-5 relative">
                    <label htmlFor="name" className="text-[16px] font-[500] text-Gray w-[25%]">Tên thương hiệu:</label>
                    <input type="text" value={brand} onChange={vail => setBrand(vail.target.value)} id="name" placeholder="Nhập tên thương hiệu tại đây..." className={`w-full border outline-none rounded-md py-2 px-4 ${errBrand? "border-red-600" : "border-Gray"}`}/>
                    <small className={`${errBrand? "absolute bottom-[-22px] left-[32%] translate-x-[-32%] text-red-600" : "hidden"}`}>{mess}</small>
                </div>
    
                <button onClick={handleSubmitCreateBrand} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-10 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Cập nhật</button>
            </form>
        </div>
      )
}

export default UpdateBrand
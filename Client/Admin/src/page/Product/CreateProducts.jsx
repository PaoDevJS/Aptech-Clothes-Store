import { ThemeApp } from "../../../context/ThemeContext"
import { useContext, useState } from "react"
// react icons
import { IoClose } from "react-icons/io5"

const CreateProducts = () => {
    // check name product
    const [name, setName] = useState("")
    const [errName, setErrName] = useState(false)
    const [messName, setMessName] = useState("")

    const CheckNameProduct = () => {
        if(!name) {
            setErrName(true)
            setMessName("Vui lòng không để trống trường này.")
            return 
        }

        setErrName(false)
        setMessName("")
    }

    // Check description product
    const [desc, setDesc] = useState("")
    const [errDesc, setErrDesc] = useState(false)
    const [messDesc, setMessDesc] = useState("")

    const CheckDescriptionProduct = () => {
        if(!desc) {
            setErrDesc(true)
            setMessDesc("Vui lòng không để trống trường này.")
            return
        }

        setErrDesc(false)
        setMessDesc("")
    }

    // check price product
    const [price, setPrice] = useState("")
    const [errPrice, setErrPrice] = useState(false)
    const [messPrice, setMessPrice] = useState("")

    const checkPriceProduct = () => {
        if(!price) {
            setErrPrice(true)
            setMessPrice("Vui lòng không để trống trường này.")
            return
        }

        setErrPrice(false)
        setMessPrice("")
    }

    // check stock product
    const [stock, setStock] = useState("")
    const [errStock, setErrStock] = useState(false)
    const [messStock, setMessStock] = useState("")

    const checkStockProduct = () => {
        if(!stock) {
            setErrStock(true)
            setMessStock("Vui lòng không để trống trường này.")
            return
        }

        setErrStock(false)
        setMessStock("")
    }

    // check category product
    const [category, setCategory] = useState("")
    const [errCategory, setErrCategory] = useState(false)
    const [messCategory, setMessCategory] = useState("")

    const checkCategoryProduct = () => {
        if(!category) {
            setErrCategory(true)
            setMessCategory("Vui lòng không để trống trường này.")
            return
        }

        setErrCategory(false)
        setMessCategory("")
    }


    const handleSubmitCreateProduct = e => {
        e.preventDefault()

        CheckNameProduct()
        CheckDescriptionProduct()
        checkStockProduct()
        checkPriceProduct()
        checkCategoryProduct()
    }
  return (
    <div className="w-[90%] m-auto py-5 px-10 rounded-md">
        <h1 className="text-2xl font-bold text-[#898989] text-center mb-16 uppercase">Thêm sản phẩm mới</h1>
        <form className="flex flex-col gap-8">
            {/* Name */}
            <div className="flex items-center gap-5 relative">
                <label htmlFor="name" className="w-[20%] text-[16px] font-[500] text-Gray">Tên sản phẩm:</label>
                <input type="text" onChange={vail => setName(vail.target.value)} value={name} id="name" placeholder="Nhập tên sản phẩm..." className={`flex-1 border outline-none rounded-md py-3 px-4 ${errName? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}/>
                <small className={`${errName ? "absolute bottom-[-20px] left-[28%] translate-x-[-28%] text-red-600" : "hidden"}`}>{messName}</small>
            </div>

            {/* Description */}
            <div className="flex gap-5 relative">
                <label htmlFor="desc" className="w-[20%] text-[16px] font-[500] text-Gray mt-2">Mô tả sản phẩm:</label>
                <textarea value={desc} id="desc" onChange={vail => setDesc(vail.target.value)} placeholder="Nhập mô tả sản phẩm..." className={`flex-1 border outline-none rounded-md h-[15rem] py-3 px-4 ${errDesc? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}/>
                <small className={`${errDesc ? "absolute bottom-[-20px] left-[28%] translate-x-[-28%] text-red-600" : "hidden"}`}>{messDesc}</small>
            </div>

            {/* Price */}
            <div className="flex items-center gap-5 relative">
                <label htmlFor="price" className="text-[16px] w-[20%] font-[500] text-Gray">Giá Tiền:</label>
                <input type="text" value={price} onChange={vail => setPrice(vail.target.value)} id="price" placeholder="Nhập giá tiền tại đây..." className={`flex-1 border outline-none rounded-md py-3 px-4 ${errDesc? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}/>
                <small className={`${errPrice ? "absolute bottom-[-20px] left-[28%] translate-x-[-28%] text-red-600" : "hidden"}`}>{messPrice}</small>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-5 relative">
                <label htmlFor="stock" className="text-[16px] w-[20%] font-[500] text-Gray">Số lượng:</label>
                <input type="text" value={price} onChange={vail => setStock(vail.target.value)} id="stock" placeholder="Nhập số lượng sản phẩm tại đây..." className={`flex-1 border outline-none rounded-md py-3 px-4 ${errStock? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}/>
                <small className={`${errStock ? "absolute bottom-[-20px] left-[28%] translate-x-[-28%] text-red-600" : "hidden"}`}>{messStock}</small>
            </div>

            {/* category */}
            <div className="flex items-center gap-5 relative">
                <label className="text-[16px] w-[20%] font-[500] text-Gray">Thể loại:</label>
                <div className={`flex-1 flex gap-5 items-center border outline-none rounded-md py-2 px-4 ${errCategory? "border-red-600 placeholder:text-red-600" : "border-Gray"}`}>
                    <div className="w-full flex items-center">
                        <h3></h3>
                    </div>
                    <select value={category} onChange={vail => setCategory(vail.target.value)} className="border outline-none rounded-md py-2 px-4 border-Gray">
                        <option>Chọn thể loại</option>
                    </select>
                </div>
                <small className={`${errCategory ? "absolute bottom-[-20px] left-[28%] translate-x-[-28%] text-red-600" : "hidden"}`}>{messCategory}</small>
            </div>

            {/* Brand */}
            <div className="flex items-center gap-5">
                <label htmlFor="name" className="text-[16px] w-[20%] font-[500] text-Gray">Thương hiệu:</label>
                <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                    <div className="w-full flex items-center">
                        <h3>Hoodie</h3>
                    </div>
                    <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                        <option>Chọn thương hiệu</option>
                    </select>
                </div>
            </div>

            

            {/* Size */}
            <div className="flex items-center gap-5">
                <label htmlFor="name" className="text-[16px] w-[20%] font-[500] text-Gray">Kích cỡ:</label>
                <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                    <ul className="w-full">
                        <li className="border w-[30%]  h-full rounded flex relative items-center justify-center border-Gray">
                            <p>S</p>
                            <IoClose className="absolute top-1 right-1"/>
                        </li>
                    </ul>
                    <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                        <option>Chọn kích cỡ</option>
                    </select>
                </div>
            </div>

            {/* Color */}
            <div className="flex items-center gap-5">
                <label htmlFor="name" className="text-[16px] w-[20%] font-[500] text-Gray">Màu sắc:</label>
                <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                    <ul className="w-full">
                        <li className="border w-[30%]  h-full rounded flex relative items-center justify-center border-Gray">
                            <p>S</p>
                            <IoClose className="absolute top-1 right-1"/>
                        </li>
                    </ul>
                    <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                        <option>Chọn màu sắc</option>
                    </select>
                </div>
            </div>

            {/* Images */}
            <div className="flex items-center gap-5">
                <label htmlFor="name" className="text-[16px] w-[20%] font-[500] text-Gray">Ảnh sản phẩm:</label>
                <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                    <ul className="w-full">
                        <li className="border w-[30%] h-full rounded flex relative items-center justify-center border-Gray">
                            <p>S</p>
                            <IoClose className="absolute top-1 right-1"/>
                        </li>
                    </ul>
                    <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                        <option>Hoodie</option>
                    </select>
                </div>
            </div>

            <button onClick={handleSubmitCreateProduct} className="py-2 px-12 bg-Primary rounded-md m-auto block mt-7 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Thêm sản phẩm mới</button>
        </form>
    </div>
  )
}

export default CreateProducts
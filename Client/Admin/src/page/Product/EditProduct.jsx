
// react icons
import { IoClose } from "react-icons/io5"

const EditProduct = () => {
    return (
      <div className="xl:w-[70%] w-full m-auto py-5 px-10 rounded-md">
          <h1 className="text-2xl font-bold text-[#898989] text-center mb-16 uppercase">Update Product</h1>
          <form className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="w-[15%] text-[16px] font-[500] text-Gray">Name product:</label>
                  <input type="text" id="name" placeholder="Enter name here..." className="flex-1 border outline-none rounded-md py-2 px-4 border-Gray"/>
              </div>
  
              {/* Description */}
              <div className="flex gap-5">
                  <label htmlFor="name" className="w-[15%] text-[16px] font-[500] text-Gray">Description:</label>
                  <textarea placeholder="Enter description here..." className="flex-1 border h-[200px] outline-none rounded-md py-2 px-4 border-Gray"/>
              </div>
  
              {/* Price */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Price:</label>
                  <input type="text" id="name" placeholder="Enter price here..." className="flex-1 border outline-none rounded-md py-2 px-4 border-Gray"/>
              </div>
  
              {/* Stock */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Stock:</label>
                  <input type="text" id="name" placeholder="Enter Stock here..." className="flex-1 border outline-none rounded-md py-2 px-4 border-Gray"/>
              </div>
  
              {/* category */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Category:</label>
                  <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                      <div className="w-full flex items-center">
                          <h3>Hoodie</h3>
                      </div>
                      <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                          <option>Hoodie</option>
                      </select>
                  </div>
              </div>
  
              {/* Brand */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Brand:</label>
                  <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                      <div className="w-full flex items-center">
                          <h3>Hoodie</h3>
                      </div>
                      <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                          <option>Hoodie</option>
                      </select>
                  </div>
              </div>
  
              
  
              {/* Size */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Size:</label>
                  <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                      <ul className="w-full">
                          <li className="border w-[30%]  h-full rounded flex relative items-center justify-center border-Gray">
                              <p>S</p>
                              <IoClose className="absolute top-1 right-1"/>
                          </li>
                      </ul>
                      <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                          <option>Hoodie</option>
                      </select>
                  </div>
              </div>
  
              {/* Color */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Color:</label>
                  <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                      <ul className="w-full">
                          <li className="border w-[30%]  h-full rounded flex relative items-center justify-center border-Gray">
                              <p>S</p>
                              <IoClose className="absolute top-1 right-1"/>
                          </li>
                      </ul>
                      <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                          <option>Hoodie</option>
                      </select>
                  </div>
              </div>
  
              {/* Images */}
              <div className="flex items-center gap-5">
                  <label htmlFor="name" className="text-[16px] w-[15%] font-[500] text-Gray">Images:</label>
                  <div  className="flex-1 border py-2 px-4 rounded-md border-Gray flex gap-4">
                      <ul className="w-full">
                          <li className="border w-[30%]  h-full rounded flex relative items-center justify-center border-Gray">
                              <p>S</p>
                              <IoClose className="absolute top-1 right-1"/>
                          </li>
                      </ul>
                      <select className="border outline-none rounded-md py-2 px-4 border-Gray">
                          <option>Hoodie</option>
                      </select>
                  </div>
              </div>
  
              <button className="py-2 px-12 bg-Primary rounded-md m-auto block mt-7 cursor-pointer text-lg font-bold text-white border-2 border-Primary hover:bg-transparent hover:text-black transition-all duration-200 ease-in">Create</button>
          </form>
      </div>
    )
}

export default EditProduct
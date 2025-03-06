import { useDispatch, useSelector } from "react-redux";
import { successUser, errorUser } from "../../redux/Reducer/userSlice";
import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

// react icons
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [eye, setEye] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("")
  const [err, setErr] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleChangeFormData = (vail) => {
    setFormData(prev => ({...prev, [vail.target.name] : vail.target.value}))
  };

  const user = useSelector(state => state.user)

  // Check email
  const existingEmail = () => {
    const re = /\S+@\S+\.\S+/
    if(!formData.email) {
      setErr(true)
      setMessage("Vui lòng không để trống trường này.")
    } else if(!re.test(formData.email)) {
      setErr(true)
      setMessage("Email không hợp hệ, vui lòng nhập lại.")
    }

    setErr(false)
    setMessage("")
  }

  // Check password
  const existingPassword = () => {
    if(!formData.password) {
      setErr(true)
      setMessage("Vui lòng không để trống trường này.")
    }

    setErr(false)
    setMessage("")
  }

  const handleSubmitSignIn = async (e) => {
    e.preventDefault()

    existingEmail()
    existingPassword()

    try {
      const decode = await axios.post("http://localhost:2004/api/auth/login", formData)
      dispatch(successUser(decode.data))

      setErr(false)
      toast.success(user.message)
      navigate("/")
    } catch (err) {
      // console.log(err.response.data)
      dispatch(errorUser(err.response.data))
      setErr(true)
      toast.error(user.message)
    }
  }


  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gradient-to-t to-gray-200 from-red-400">
      <div className="min-w-[30%] min-h-[50%] flex flex-col gap-7 py-10 bg-White rounded-lg shadow-lg shadow-gray-500">
        <div className="pb-5 border-b border-gray-300 w-[70%] m-auto">
          <h1 className="text-center text-3xl text-red-500 font-bold uppercase">
            Login
          </h1>
          <p className="text-center text-gray-500">
            Please log in with an administrator account!
          </p>
        </div>

        <div>
          <form className="py-5 px-10 flex flex-col gap-5">
            <div className={`${err? "border border-red-600" : "border border-gray-300"} flex gap-3 items-center py-3 px-5 rounded-full relative`}>
              <input
                type="text"
                onChange={handleChangeFormData}
                value={formData.email}
                name="email"
                placeholder="Enter email here..."
                className="outline-none w-full placeholder:font-[500] bg-transparent"
                required
              />
              <small className={`absolute bottom-[-25px] text-red-500 ${err?  "block" : "hidden"} `}>{message}</small>
            </div>
            <div className="flex gap-3 items-center border border-gray-300 py-3 px-5 rounded-full mt-5">
              <input
                type={eye ? "text" : "password"}
                onChange={handleChangeFormData}
                value={formData.password}
                name="password"
                placeholder="Enter password here..."
                className="outline-none w-full placeholder:font-[500]"
                required
              />
              {eye ? (
                <FaRegEye
                  size={20}
                  className="text-gray-400 cursor-pointer hover:text-gray-700"
                  onClick={() => setEye(false)}
                />
              ) : (
                <FaRegEyeSlash
                  size={20}
                  className="text-gray-400 cursor-pointer hover:text-gray-700"
                  onClick={() => setEye(true)}
                />
              )}
            </div>

            <button onClick={handleSubmitSignIn} className="bg-Primary w-full m-auto block py-2 rounded-full border-2 border-Primary text-lg font-bold text-white cursor-pointer mt-3 hover:bg-transparent hover:text-black transition-all duration-300 ease-in-out">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

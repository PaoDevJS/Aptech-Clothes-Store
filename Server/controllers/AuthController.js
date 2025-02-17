import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import Account from "../models/Account.js"

export const SignUp = async (req, res) => {
    try {
        const { Email, Password, FirstName, LastName, Phone,
            Birthday, Sex
         } = req.body

        if(!Email || !Password || !FirstName || !LastName || !Phone || !Birthday || !Sex) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        // Check email

        const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!regexEmail.test(Email))
            return res.status(400).json({
                success: false,
                message: "Địa chỉ email không hợp lệ."
            })

        const existEmail = await Account.findOne({ Email })
        if(existEmail) 
            return res.status(400).json({
                success: false,
                message: "Email này đã tồn tại."
            })
        
        // Check phone
        // const regexPhone =
        // /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        // if(!regexPhone.test(Phone)) 
        //     return res.status(400).json({
        //         success: false,
        //         message: "Số điện thoại không hợp lệ."
        //     })

        const existPhone = await User.findOne({ Phone })
        if(existPhone) 
            return res.status(400).json({
                success: false,
                message: "Số điện thoại này đã tồn tại."
            })
        
        // Check password
        if(Password.length < 8)
            return res.status(400).json({
                success: false,
                message: "Mật khẩu có độ dài tối thiểu 8 ký tự."
            })
        
        const salt = await bcrypt.genSaltSync(10)
        const hashPassword = await bcrypt.hashSync(Password, salt)

        const createUser = new User({
            FirstName,
            LastName, 
            Phone,
            Birthday,
            Sex
        })

        const createAccount = new Account({
            Email,
            Password: hashPassword,
            UserId: createUser._id
        })

        // const token = await jwt.sign({ id: createAccount._id }, process.envACCESS_TOKEN_JWT, { expiresIn: '7d' })

        // console.log("token: " + token)

        return res.status(200).json({
            success: true,
            message: "Đăng ký tài khoản thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const SignIn = async (req, res) => {
    try {
        const { Email, Password } = req.body

        if(!Email || !Password)
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        const auth = await Account.findOne({ Email })
        console.log(auth)

        if(!auth)
            return res.status(400).json({
                success: false,
                message: "Email hoặc mật khẩu không chính xác."
            })

        const comparePassword = await bcrypt.compareSync(Password, auth.Password)
        if(!comparePassword)
            return res.status(400).json({
                success: false,
                message: "Email hoặc mật khẩu không chính xác."
            })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

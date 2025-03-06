import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import Account from "../models/Account.js"

export const SignUp = async (req, res) => {
    try {
        const { Email, Password, FirstName, LastName, Phone,
            Birthday, Sex
         } = req.body

        if(!Email || !Password || !FirstName || !LastName) 
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
        const regexPhone = /^[0-9]+$/

        if(!regexPhone.test(Phone)) 
            return res.status(400).json({
                success: false,
                message: "Số điện thoại không hợp lệ."
            })

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
            Phone,
            Birthday,
            Sex
        })
        console.log(createUser._id)

        const createAccount = new Account({
            FirstName,
            LastName,
            Email,
            Password: hashPassword,
            UserId: createUser._id
        })

        await createUser.save()
        await createAccount.save()
        console.log(createAccount)

        // const token = await jwt.sign({ id: createAccount._id }, process.env.ACCESS_TOKEN_JWT, { expiresIn: "7d" })

        // console.log(token)

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
        const { email, password } = req.body

        if(!email || !password)
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        // Check email
        const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if(!regexEmail.test(email))
            return res.status(400).json({
                success: false,
                message: "Địa chỉ email không hợp lệ."
            })
            
        const auth = await Account.findOne({ Email: email }).select("-_id").populate("UserId")
        if(!auth)
            return res.status(400).json({
                success: false,
                message: "Email hoặc mật khẩu không chính xác."
            })
        
        //  Check Password
        const comparePassword = await bcrypt.compareSync(password, auth.Password)
        if(!comparePassword)
            return res.status(400).json({
                success: false,
                message: "Email hoặc mật khẩu không chính xác."
            })
        
        const {Password, ...user} = auth._doc
        const token = await jwt.sign({ user }, process.env.ACCESS_TOKEN_JWT)

        return res.cookie("token", token).status(200).json({
                    success: true,
                    message: "Đăng nhập thành công!",
                    user,
                    token
                })
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const SignOut = (req, res) => {
    try {
        return res.clearCookie("token").status(200).json({
            success: true,
            message: "Đăng xuất thành công!"
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const GetUserId = async (req, res) => {
    try {
        const id = req.params.id
        const auth = await Account.find({}).populate("UserId")
        
        return res.status(200).json({
            success: true,
            user: JSON.stringify(auth)
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const GetAllUser = async (req, res) => {
    try {
        const auth = await Account.find({}).select("-Password").populate("UserId")
        
        return res.status(200).json({
            success: true,
            user: JSON.stringify(auth)
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
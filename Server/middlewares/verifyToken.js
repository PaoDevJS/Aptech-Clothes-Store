import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_JWT)

        req.user = decoded.user

        next()
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

export const verifyTokenAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_JWT)

        req.user = decoded.user 

        if(req.user.UserId.isAdmin)
            return res.status(403).json({
                success: false,
                message: "Failed!"
            })

        next()
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: err.message
        })
    }
}
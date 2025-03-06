import colorModel from "../models/color.model.js"


const createColor = async (req, res) => {
    try {
        const { name } = req.body
        
                if(!name) 
                    return res.status(400).json({
                        success: false,
                        message: "Vui lòng không để trống trường này."
                    })
        
                const color = await colorModel.findOne({ name })
                if(color)
                    return res.status(400).json({
                        success: false,
                        message: "Đã tồn tại."
                    })
                
                const newColor = new colorModel({
                    name
                })
        
                await newColor.save()
        
                return res.status(200).json({
                    success: true,
                    message: "Thêm màu mới thành công."
                })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const updateColor = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        
        const color = await colorModel.findById( id )
        if(!color) 
            return res.status(400).json({
                success: false,
                message: "Màu này không tồn tại."
            })

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

          
        color.name = name || color.name

        await color.save()

        return res.status(200).json({
            success: false,
            message: "Cập nhật màu thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


const deleteColor = async (req, res) => {
    try {
        const id = req.params.id
        
        await colorModel.findByIdAndDelete( id )

        return res.status(200).json({
            success: true,
            message: "Xóa màu thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getAllColors = async (req, res) => {
    try {
        const colors = await colorModel.find({})

        return res.status(200).json({
            success: false,
            data: colors
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getItemColor = async (req, res) => {
    try {
        const id = req.params.id

        const itemColor = await colorModel.findById( id )

        return res.status(200).json({
            success: true,
            data: itemColor
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {
    createColor,
    updateColor,
    deleteColor,
    getAllColors,
    getItemColor
}

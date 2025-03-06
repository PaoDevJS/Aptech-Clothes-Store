import sizeModel from "../models/size.model.js"

export const createSize = async (req, res) => {
    try {
        const { name } = req.body

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        const size = await sizeModel.findOne({ name })
        if(size)
            return res.status(400).json({
                success: false,
                message: "Đã tồn tại."
            })
        
        const newSize= new sizeModel({
            name
        })

        await newSize.save()

        return res.status(200).json({
            success: true,
            message: "Thêm kích cỡ mới thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const updateSize = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })
        
        const size = await sizeModel.findById( id )
        if(!size) 
            return res.status(400).json({
                success: false,
                message: "Kích cỡ này không tồn tại."
            })


        
        size.name = name || size.name

        await size.save()

        return res.status(200).json({
            success: false,
            message: "Cập nhật kích cỡ thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const deleteSize = async (req, res) => {
    try {
        const id = req.params.id
        
        await sizeModel.findByIdAndDelete( id )

        return res.status(200).json({
            success: true,
            message: "Xóa kích cỡ thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getAllSizes = async (req, res) => {
    try {
        const size = await sizeModel.find({})

        return res.status(200).json({
            success: true,
            data: size
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getItemSize = async (req, res) => {
    try {
        const id = req.params.id

        const itemSize = await sizeModel.findById( id )

        return res.status(200).json({
            success: true,
            data: itemSize
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
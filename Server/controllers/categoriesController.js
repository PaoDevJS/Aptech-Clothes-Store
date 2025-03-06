import Categories from "../models/Categories.js"

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        const category = await Categories.findOne({ name })
        if(category)
            return res.status(400).json({
                success: false,
                message: "Đã tồn tại."
            })
        
        const newCategory = new Categories({
            name
        })

        await newCategory.save()

        return res.status(200).json({
            success: true,
            message: "Thêm danh mục mới thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const UpdateCategory = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        
        const category = await Categories.findById( id )
        if(!category) 
            return res.status(400).json({
                success: false,
                message: "Danh mục này không tồn tại."
            })

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

        
        category.name = name || category.name

        await category.save()

        return res.status(200).json({
            success: false,
            message: "Cập nhật danh mục thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        
        await Categories.findByIdAndDelete( id )

        return res.status(200).json({
            success: true,
            message: "Xóa danh mục thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find({})

        return res.status(200).json({
            success: true,
            data: categories
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export const getItemCategory = async (req, res) => {
    try {
        const id = req.params.id

        const itemCategory = await Categories.findById( id )

        return res.status(200).json({
            success: true,
            data: itemCategory
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}
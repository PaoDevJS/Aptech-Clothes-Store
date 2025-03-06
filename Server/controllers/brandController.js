import Brand from "../models/Brand.js"


const createBrand = async (req, res) => {
    try {
        const { name } = req.body
        
                if(!name) 
                    return res.status(400).json({
                        success: false,
                        message: "Vui lòng không để trống trường này."
                    })
        
                const brand = await Brand.findOne({ name })
                if(brand)
                    return res.status(400).json({
                        success: false,
                        message: "Đã tồn tại."
                    })
                
                const newBand = new Brand({
                    name
                })
        
                await newBand.save()
        
                return res.status(200).json({
                    success: true,
                    message: "Thêm thương hiệu mới thành công."
                })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const updateBrand = async (req, res) => {
    try {
        const id = req.params.id
        const { name } = req.body
        
        const brand = await Brand.findById( id )
        if(!brand) 
            return res.status(400).json({
                success: false,
                message: "Thương hiệu này không tồn tại."
            })

        if(!name) 
            return res.status(400).json({
                success: false,
                message: "Vui lòng không để trống trường này."
            })

          
        brand.name = name || brand.name

        await brand.save()

        return res.status(200).json({
            success: false,
            message: "Cập nhật thương hiệu thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


const deleteBrand = async (req, res) => {
    try {
        const id = req.params.id
        
        await Brand.findByIdAndDelete( id )

        return res.status(200).json({
            success: true,
            message: "Xóa thương hiệu thành công."
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find({})
        
        return res.status(200).json({
            success: true,
            data: brands
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

const getItemBrand = async (req, res) => {
    try {
        const id = req.params.id

        const itemBrand = await Brand.findById( id )

        return res.status(200).json({
            success: true,
            data: itemBrand
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {
    createBrand,
    updateBrand,
    deleteBrand,
    getAllBrands,
    getItemBrand
}

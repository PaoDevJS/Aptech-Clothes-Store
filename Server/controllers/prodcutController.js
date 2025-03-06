import productModel from "../models/product.model.js"

const createProduct = async (req, res) => {
    try {
        const arrayImages = req.file.originalname
        const {name, desc, stocks, sizeId, colorId, brandId, categoryId} = req.body

        console.log("images >> ", arrayImages)
        console.log("item >> ", req.body)
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export {
    createProduct
}
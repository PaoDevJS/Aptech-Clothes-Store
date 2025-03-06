import multerStorage from "../middlewares/multer.js"
import { createProduct } from "../controllers/prodcutController.js"

const ProductRouter = (main, route) => {
    route.post("/create-product", multerStorage.array("upload_file_product"), createProduct)

    main.use("/api/product", route)
}

export default ProductRouter
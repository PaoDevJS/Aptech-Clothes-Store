import { createBrand, deleteBrand, getAllBrands, getItemBrand, updateBrand } from "../controllers/brandController.js"

const brandRouter = (main, router) => {
    router.post("/create-brand", createBrand)
    router.put("/update-brand/:id", updateBrand)
    router.delete("/delete-brand/:id", deleteBrand)
    router.get("/get-item-brand/:id", getItemBrand)
    router.get("/get-all-brand", getAllBrands)

    main.use("/api/brand", router)
}

export default brandRouter
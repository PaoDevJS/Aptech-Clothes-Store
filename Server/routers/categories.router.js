import { createCategory, UpdateCategory, getAllCategories, getItemCategory, deleteCategory } from "../controllers/categoriesController.js"

const categoriesRouter = (main, router) => {
    router.post("/create-category", createCategory)
    router.put("/update-category/:id", UpdateCategory)
    router.delete("/delete-category/:id", deleteCategory)
    router.get("/get-item-category/:id", getItemCategory)
    router.get("/get-all-category", getAllCategories)

    main.use("/api/category", router)
}

export default categoriesRouter
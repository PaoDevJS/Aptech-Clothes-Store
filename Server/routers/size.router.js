import { createSize, deleteSize, getAllSizes, getItemSize, updateSize } from "../controllers/sizeController.js"

const SizeRouter = (main, route) => {
    route.post("/create-size", createSize)
    route.put("/update-size/:id", updateSize)
    route.delete("/delete-size/:id", deleteSize)
    route.get("/get-item-size/:id", getItemSize)
    route.get("/get-all-sizes", getAllSizes)

    
    main.use("/api/size", route)
}

export default SizeRouter
import { createColor, deleteColor, getAllColors, getItemColor, updateColor } from "../controllers/ColorController.js"

const ColorRouter = (main, route) => {
    route.post("/create-color", createColor,)
    route.put("/updata-color/:id", updateColor)
    route.delete("/delete-color/:id", deleteColor)
    route.get("get-item-color/:id", getItemColor)
    route.get("/get-all-colors", getAllColors)

    main.use("/api/color/", route)
}

export default ColorRouter
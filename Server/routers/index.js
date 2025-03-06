import express from "express"
import authRouter from "./auth.router.js";
import categoriesRouter from "./categories.router.js";
import brandRouter from "./brand.router.js";
import sizeRouter from "./size.router.js";
import colorRouter from "./color.router.js";
import productRouter from "./product.router.js";

const router = express.Router()

const isRouter = ( main ) => {

    authRouter(main, router)
    categoriesRouter(main, router)
    brandRouter(main, router)
    sizeRouter(main, router)
    colorRouter(main, router)
    productRouter(main, router)

}

export default isRouter;
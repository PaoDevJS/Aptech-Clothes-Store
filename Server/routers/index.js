import express from "express"
import authRouter from "./auth.router.js";

const router = express.Router()

const isRouter = ( main ) => {

    authRouter(main, router)


}

export default isRouter;
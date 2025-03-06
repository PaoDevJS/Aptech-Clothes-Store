import { SignUp, SignIn, SignOut, GetUserId, GetAllUser } from "../controllers/AuthController.js"
import { verifyToken, verifyTokenAdmin } from "../middlewares/verifyToken.js"

const authRouter = (main, router) => {
    router.post("/register", SignUp)
    router.post("/login", SignIn)
    router.post("/logout", SignOut)
    router.get("/get-user", verifyTokenAdmin, GetUserId)
    router.get("/get-all-user", verifyTokenAdmin, GetAllUser)

    main.use("/api/auth", router)
}

export default authRouter;


import { SignUp } from "../controllers/AuthController.js";

const authRouter = (main, router) => {
    router.post("/signup", SignUp)

    main.use("/api/auth", router)
}

export default authRouter;


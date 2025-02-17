import isRouter from "../routers/index.js"
import connectionDB from "./db.js"

const port = process.env.PORT || 2002

const configServer = (main) => {

    // connection to database
    connectionDB()

    // routers
    isRouter(main)

    main.listen(port, () => {
        console.log("Server running to port: http://locahost:" + port)
    })
}
export default configServer;
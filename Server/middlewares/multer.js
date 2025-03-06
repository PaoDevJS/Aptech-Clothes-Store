import multer from "multer"
import path from "path"

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, path.extname(file.originalname))
    }
})

const multerStorage = multer({ storage: diskStorage })

export default multerStorage
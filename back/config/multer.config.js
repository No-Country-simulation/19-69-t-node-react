import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, path.join(import.meta.dirname, '../public/uploads/'));
    },
    filename: (req, res, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})

export default upload;
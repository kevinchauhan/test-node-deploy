import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, path.join(path.resolve(), 'uploads'))
    },
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        return cb(null, filename)
    }
})

export const upload = multer({
    storage, limits: {
        fileSize: 10 * 1024 * 1024
    }
}).fields([
    { name: 'poster', maxCount: 1 },
    { name: 'video', maxCount: 1 }]
)

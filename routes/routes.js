import express from 'express'
import { MovieController } from '../controllers/MovieController.js'
import { upload } from '../middlewares/multerService.js'
import registerValidator from '../validators/registerValidator.js'

const router = express.Router()

const movieController = new MovieController()

router.get('/', movieController.get)
router.get('/add', (req, res) => {
    res.render('./pages/addMovie', { errors: '' })
})
router.post('/add', upload, registerValidator, movieController.create)
router.get('/edit/:id', movieController.edit)
router.post('/edit/:id', upload, movieController.update)
router.get('/delete/:id', movieController.remove)

export default router
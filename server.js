import express from 'express'
import router from './routes/routes.js'
import { connectDb } from './config/db.js'
import path from 'path'

const app = express()
const PORT = 5501

connectDb()

// set static folder
app.use(express.static('./uploads'))

// Set 'views' directory
app.set('views', path.join(path.resolve(), 'views'))

// set template engine
app.set('view engine', 'ejs')

app.use(router)

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})
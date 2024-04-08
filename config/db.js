import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const url = process.env.DB_URL
console.log(url)

export const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log('db connection successfull...')
    } catch (error) {
        console.log(error)
    }
}

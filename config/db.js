import mongoose from 'mongoose'
// const url = 'mongodb+srv://kevinchauhan:nf7nKrDb1L3kYfhA@cluster0.ngoyxsf.mongodb.net/mflix?retryWrites=true&w=majority&appName=Cluster0'
const url = 'mongodb://localhost:27017/mflix'

export const connectDb = async () => {
    try {
        await mongoose.connect(url)
        console.log('db connection successfull...')
    } catch (error) {
        console.log(error)
    }
}

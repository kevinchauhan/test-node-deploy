import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    releaseYear: String,
    genre: String,
    rating: String,
    poster: String,
    video: String
}, { timestamps: true })

export default mongoose.model('movies', movieSchema)
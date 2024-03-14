import { checkSchema } from "express-validator";

export default checkSchema({
    title: {
        errorMessage: 'title is required',
        trim: true,
        notEmpty: true
    },
    description: {
        errorMessage: 'description is required',
        trim: true,
        notEmpty: true
    },
    releaseYear: {
        errorMessage: 'release year is required',
        trim: true,
        notEmpty: true
    },
    genre: {
        errorMessage: 'select genre',
        trim: true,
        notEmpty: true
    },
    rating: {
        errorMessage: 'select rating',
        trim: true,
        notEmpty: true
    }
})
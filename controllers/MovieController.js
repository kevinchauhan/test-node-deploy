import fs from 'fs'
import movieModel from "../models/movieModel.js"
import { validationResult } from 'express-validator'

export class MovieController {
    async create(req, res) {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            console.log(req.body)
            return res.render('pages/editMovie', { errors: errors.mapped(), movie: req.body })
        }

        try {
            let poster, video
            if (req.files.poster) {
                poster = req.files.poster[0].filename
            }
            if (req.files.video) {
                video = req.files.video[0].filename
            }
            const data = {
                ...req.body,
                poster,
                video
            }
            const model = await movieModel(data)
            await model.save()
        } catch (error) {
            console.log(error)
        }
        res.redirect('/')

    }

    async get(req, res) {
        try {
            const movies = await movieModel.find()
            res.render('pages/index', { movies })
        } catch (error) {
            console.log(error)
        }
    }

    async remove(req, res) {
        try {
            const { id } = req.params
            const deletedMovie = await movieModel.findOneAndDelete({ _id: id })
            const { poster, video } = deletedMovie
            if (poster) {
                fs.unlinkSync(`uploads/${poster}`)
            }
            if (video) {
                fs.unlinkSync(`uploads/${video}`)
            }
        } catch (error) {
            console.log(error)
        }
        res.redirect('/')
    }

    async edit(req, res) {
        const { id } = req.params
        try {
            const movie = await movieModel.findOne({ _id: id })
            res.render('pages/editMovie', { movie, errors: '' })
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        const { id } = req.params

        try {
            let poster, video
            if (req.files.poster) {
                poster = req.files.poster[0].filename
            }
            if (req.files.video) {
                video = req.files.video[0].filename
            }
            const data = {
                ...req.body,
                poster,
                video
            }
            await movieModel.updateOne({ _id: id }, data)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/')

    }

}
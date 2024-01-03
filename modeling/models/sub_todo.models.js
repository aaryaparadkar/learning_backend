import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema({

}, {timestamps: true})

export const Subtodo = mongoose.model("Subtodo", subtodoSchema)
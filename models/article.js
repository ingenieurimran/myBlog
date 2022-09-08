// create database in mongodb
const mongoose = require('mongoose')
const slugify = require('slugify')
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
})
// using slugify to access title name rather then title id
articleSchema.pre('validate', function (next) {
  if (this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true })
  }
  next()
})
module.exports = mongoose.model('Article', articleSchema)

const category = require('express').Router()
const { CategoryController } = require('../../../controller')

category.get('/video/:categoryid', CategoryController.videocategory)
category.post('/bulkvideo', CategoryController.bulkvideocategory)
category.get('/recommend/:userid', CategoryController.recommend)

module.exports = category
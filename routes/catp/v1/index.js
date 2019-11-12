const v1 = require('express').Router()
const category = require('./category-processor')

v1.use('/category-processor', category)

module.exports = v1;
const category = require('express').Router()
const { CategoryController } = require('../../../controller')

category.get('/video/:categoryid', CategoryController.videocategory)
category.get('/recommend/:userid', CategoryController.recommend)

// category.post('/store', [CategoryMiddleware.checkValidation, CategoryMiddleware.checkDuplicate], CategoryController.create)
// category.get('/search', CategoryController.search)
// category.get('/:categoryid', CategoryController.show)
// category.put('/update/:categoryid', [CategoryMiddleware.checkValidation, CategoryMiddleware.checkDuplicate], CategoryController.update)
// category.delete('/delete/:categoryid', CategoryController.destroy)

module.exports = category
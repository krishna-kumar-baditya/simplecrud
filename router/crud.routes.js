const router = require('express').Router()
const CrudController = require('../controllers/crud.controllers')
router.get('/',CrudController.showForm)
router.post('/submit',CrudController.submit)
router.get('/list',CrudController.list)
router.get('/edit/:id',CrudController.edit)
router.post('/update',CrudController.update)
router.get('/delete/:id',CrudController.delete)


module.exports = router
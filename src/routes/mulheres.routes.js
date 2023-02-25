const express = require('express')
const router = express.Router()
const controller = require('../controllers/mulheresController')


//listar todas as mulheres
router.get('/', controller.getAll )

//criar uma nova mulher
router.post('/', controller.create)

//listar uma mulher
router.get('/:id', controller.getOne )

//atualizar uma informacao especifica numa mulher
router.patch('/:id', controller.updateOne)

//deletar uma mulher
router.delete('/:id', controller.deleteOne)

module.exports = router
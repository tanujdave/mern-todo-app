const router = require('express').Router()
const todos = require('../controllers/todos')

router.get('/', todos.getAll)
router.get('/status/:status', todos.getAll)
router.post('/', todos.create)
router.delete('/:id', todos.delete)
router.patch('/:id/status/:status', todos.changeStatus)

module.exports = router
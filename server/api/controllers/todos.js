const Todo = require('../models/todo')

exports.create = async (req,res,next) => {
    const todo = new Todo({
        name: req.body.name,
        status: req.body.status || 'pending'
    });
    try {
        await todo.save()
        res.status(201).json(todo);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }
}

exports.getAll = async (req, res, next) => {
    try {
        let query = {};
        if (req.params.status) {
            query = {status: req.params.status}
        }
        const todos = await Todo.find(query)
        res.status(200).json(todos);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }   
}

exports.delete = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id)
        await todo.remove()
        res.status(200).json(todo);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }
}

exports.changeStatus = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id)
        todo.status = req.params.status
        await todo.save()
        res.status(200).json(todo);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }
}
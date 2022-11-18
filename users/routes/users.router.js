const express = require('express')
const userRouter = express.Router()

userRouter.get('/');

userRouter.get('/:id', (req, res) => {
    const {id} = req.params
    const data = await 
})

module.exports = userRouter;
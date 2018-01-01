const express = require('express')
const router = express.Router()

// name相当于一个占位符
router.get('/:name',(req,res) => {
    res.send('hello：' + req.params.name)
})

module.exports = router
const express = require('express')
const router = express.Router()

// name相当于一个占位符
router.get('/:name',(req,res) => {
    // 渲染ejs模板
    res.render('users',{
        name:req.params.name
    })
})

module.exports = router
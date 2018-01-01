const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

// get是一个页面，post是一个操作(动作)
// GET /signin 登录页
router.get('/',checkNotLogin,(req,res,next) => {
    res.send('登陆页')
})

// POST /signin 用户登录
router.post('/',checkNotLogin,(req,res,next) => {
    res.send('登陆')
})

module.exports = router
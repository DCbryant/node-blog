const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('1')
    next()
})

app.use((req,res,next) => {
    console.log('2')
    res.status(200).end()
})

// 错误处理
app.use((req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3333,() => {
    console.log('app is listening on port 3333')
})
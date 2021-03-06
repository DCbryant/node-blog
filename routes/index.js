module.exports = function (app) {
    // 一进来就进入posts路由
    app.get('/', (req, res) => {
        res.redirect('/posts')
    })
    app.use('/signup', require('./signup'))
    app.use('/signin', require('./signin'))
    app.use('/signout', require('./signout'))
    app.use('/posts', require('./posts'))
    app.use('/comments', require('./comments'))
    // 404 page
    app.use((req, res) => {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}
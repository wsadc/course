const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = require('./router')

const app = express()

app.use('/public', express.static(path.join(__dirname, './public')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
    secret: 'itcast',
    resave: false,
    saveUninitialized: false
}))

app.use(router)

app.use(function (req, res) {
    res.render('404.html')
})

app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        message: err.message
    })
})

app.listen(5000, function () {
    console.log('running...')
})
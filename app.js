const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').load
const models = require('./models/index')

const app = express()

// config apps 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

// sequelize sync 

models.sequelize.sync()
    .then(() => console.log('Database sync with sequelize'))
    .catch(error => console.log(error, 'Something Wrong'))

// configure routes  

const router = require('./config/routes')
app.use('/', router)

// launch server 

const port = process.env.PORT || '3000'
app.listen(port, ()=> {
    console.log(`listen on port ${port}`)
})
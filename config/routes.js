const express = require('express')
const router = express.Router()

// routes

router.get('/', (req, res ) => {
    res.send('Welcome to Passport with Sequelize')
})

// export 

module.exports = router

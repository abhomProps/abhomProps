require('dotenv').config()
const express = require('express')
const app = express()
const authRouters = require('./Routes/users')
app.get('/', (req, res) => {
    res.send('Welcome')
})

//routes
app.use('/abhom-api/v1', authRouters)
// middleware
const errorHandler = require('./Middleware/errorHandler')
const authHandler = require('./Middleware/auth')

const Port = process.env.PORT || 3000
try {
    app.listen(Port, () => {
        console.log('Port is Listtening on 3000');
    })
} catch (error) {
    console.log(error);
}

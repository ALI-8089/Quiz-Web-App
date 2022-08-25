const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./Model/user')
const db = require('./MongoConfiguration/DbConnection')
require('dotenv').config()
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', methods: ['GET'] }))
db.on('error', console.error.bind(console, 'Mongodb connection failed'))
app.use('/', userRouter)
app.listen(4000, () => {
  console.log('server started on port 4000')
})


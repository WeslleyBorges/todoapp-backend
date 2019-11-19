const LOCAL_PORT = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

const PORT = LOCAL_PORT || process.env.PORT

server.listen(PORT, '0.0.0.0', function() {
  console.log(`Server is running on port ${PORT}.`)
})

module.exports = server

const express = require('express')
const server = require('./server.js');


server.use(express.json())


const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});
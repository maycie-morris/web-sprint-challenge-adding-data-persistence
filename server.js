const express = require('express');
const server = express();
const helmet = require('helmet');


server.use(express.json());
server.use(helmet())


server.get('/', (req,res) => {
    res.status(200).json({
        message: `10/9 Web Sprint Challenge!`
    })
});


module.exports = server;
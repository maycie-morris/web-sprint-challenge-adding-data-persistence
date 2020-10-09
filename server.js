const express = require('express');
const server = express();
const helmet = require('helmet');

const ProjectsRouter = require('./api/projects-router');
const ResourcesRouter = require('./api/resources-router');
const TasksRouter = require('./api/tasks-router');


server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);


server.get('/', (req,res) => {
    res.status(200).json({
        message: `10/9 Web Sprint Challenge!`
    })
});


module.exports = server;
const express = require('express');
const router = express.Router();
const Projects = require('./Projects-model');


router.get('/', (req, res)=>{
    Projects
        .find()
        .then(project =>{
            res.status(200).json(project)
        })
        .catch(err =>{
            console.log(err)
            res.status(500).json({
                error: err.message
            })
        })
})

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    Projects
        .findById(id)
        .then(project => {
        res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err.message
            })
        })
    })


router.post('/', (req, res)=>{
    const projectData = req.body;
    Projects
        .insert(projectData)
        .then(project =>{
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err.message
            })
    })
})


module.exports = router;
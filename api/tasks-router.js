const express = require("express")
const router= express.Router();
const Tasks = require("./tasks-model");

router.get("/", (req, res) => {
  Tasks
    .find()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ 
          error: err.message
        });
    });
});

router.get('/:id', (req, res)=>{
    const { id } = req.params;
    Tasks
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

router.post("/", (req, res) => {
  const data = req.body;

  Tasks.insert(data)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ 
          error: err.message
        });
    });
});

module.exports = router;
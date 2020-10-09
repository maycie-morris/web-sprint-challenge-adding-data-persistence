const express = require("express")
const router= express.Router();
const Resources = require("./resources-model");

router.get("/", (req, res) => {
  Resources
    .find()
    .then(resources => {
        res.status(200).json(resources)
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
    Resources
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

  Resources
    .insert(data)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ 
            error: err.message
        });
    });
});

module.exports = router;
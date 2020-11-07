const router = require('express').Router()
const projectData = require('./data/helpers/projectModel')

router.get('/', (req,res) => {
    projectData.get()
    .then(project => {
        
        res.status(201).json({project})
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/:id', (req, res) => {
    projectData.get(req.params.id)
    .then(project => {
        
        res.status(200).json({project})
    })
    .catch(error => {
        console.log(`There was an error: ${error}`)
    })
})

router.post('/', (req, res) => {
    projectData.get(req.body.project_id)
    .then(post => {
        projectData.insert(res.body)
        res.status(201).json(`Posted Successfully`)
    })

    .catch(error => {
        console.log(`There was an error: ${error}`)
    })
})

router.put('/:id', (req,res) => {
    projectData.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        console.log(`Error with put request ${error}`)
    })
})

router.delete('/:id', (req,res) => {
    projectData.remove(req.params.id)
    .then((count) => {
        if (count > 0) {
            res.status(200).json({
                message: "project deleted",
            })
        } else {
            res.status(404).json({
                message: "the project with the id does not exist",
            })
        }
    })
    .catch(error => {
        console.log(`Error with put request ${error}`)
    })
})

module.exports = router;
const router = require('express').Router()
const actionData = require('./data/helpers/actionModel')

router.get('/', (req, res) => {
    actionData.get()
    .then(actions => {
        //WORKS
        res.status(201).json({actions})
    })
    .catch(error => {
        console.log(error)
    })
})

router.get('/:id', (req, res) => {
    actionData.get(req.params.id)
    .then(project => {
        //WORKS
        res.status(200).json({project})
    })
    .catch(error => {
        console.log(`There was an error: ${error}`)
    })
})

router.post('/', (req, res) => {
    actionData.get(req.body.id)
    .then(post => {
        actionData.insert(req.body)
        .then(action => {
            res.status(200).json(`POST SUCCESSFUL`)
        })
        .catch(error => {
            console.log("ERROR")
        })
        res.status(201).json(`Posted Successfully ${post}`)
    })
    .catch(error => {
        console.log(`There was an error: ${error}`)
    })
})

router.put('/:id', (req,res) => {
    actionData.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json("Successful",project)
    })
    .catch(error => {
        console.log(`Error with put request ${error}`)
    })
})

router.delete('/:id', (req,res) => {
    actionData.remove(req.params.id)
    .then(project => {
        res.status(200).json(`Project deleted ${project}`)
    })
    .catch(error => {
        console.log(`Error with put request ${error}`)
    })
})


module.exports = router
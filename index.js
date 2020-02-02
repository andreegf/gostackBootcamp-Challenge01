const express = require('express')

const app = express()

app.use(express.json())

const projects = []

app.use(countReqs)

app.post('/projects', (req,res) => {

    const { title, id }  = req.body

    const newProject = {
        id,
        title,
        tasks: []
    }

    projects.push(newProject)

    return res.json(newProject)

})

app.get('/projects', (req,res) => {

    return res.json(projects)

})

app.put('/projects/:id', checkProjectId, (req,res) => {


    const { id } = req.params
    const newTitle = req.body.title

    projects.find((project,projectId) => {
        
        if(project.id === id){
            
            projects[projectId].title = newTitle

            const updatedProject = projects[projectId]

            return res.json(updatedProject)

        }

    })

})

app.delete('/projects/:id', checkProjectId, (req,res) => {

    const { id } = req.params

    projects.find((project,projectId) => {
        
        if(project.id === id){
            
            projects.splice(projectId,1)

            return res.json(projects)

        }

    })

})

app.post('/projects/:id/tasks', checkProjectId, (req,res) => {

    const { id } = req.params
    const  newTask = req.body.title

    projects.find((project,projectId) => {
        
        if(project.id === id){
            
            projects[projectId].tasks.push(newTask)
            const updatedProject = projects[projectId]

            return res.json(updatedProject)

        }

    })

})


function checkProjectId (req, res, next){

    const { id } = req.params
    let found = false

    projects.find((project) => {
        
        if(project.id === id){
            
            found = true

        }

    })

    if(!found){
        
        return res.status(400).json({"message":`Couldn't find project with id ${id}`} )

    }

    return next()

}

function countReqs (req, res, next) {

    console.count('API Calls')
    return next()

}



app.listen(3000)
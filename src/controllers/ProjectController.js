const Project = require('../models/Project')

module.exports = {

    async index(req,res){
        
        const projects = await Project.find()
        
        return res.status(200).json(projects)

    },

    async store(req,res){

        const { title, id }  = req.body

        let project = await Project.findOne({ id })

        if(!project){
            
            project = await Project.create({ id, title })

            return res.status(200).json(project)

        }

        return res.status(400).json({"message":"Error: Id already used"})

    },

    storeTask(req, res){

        const newTask = req.body.title

        const project = req.locals.project
        
        project.tasks.push(newTask)

        updatedTasks = project.tasks

        Project.findOneAndUpdate(
            { "id" : project.id },
            {tasks : updatedTasks},
            { new : true } 
        ).then(updatedProject => {
            
            return res.status(200).json(updatedProject)

        })

    },

    update(req,res){

        const { id } = req.params

        const newTitle = req.body.title

        Project.findOneAndUpdate(
            {id},
            { "title" : newTitle }, 
            {new : true}
        ).then(updatedProject => {

            res.status(200).json(updatedProject)

        })
    },

    async delete(req, res){

        const { id } = req.params

        await Project.findOneAndDelete({ id })

        const remainingProjects = await Project.find()

        res.status(200).json(remainingProjects)

    }

}
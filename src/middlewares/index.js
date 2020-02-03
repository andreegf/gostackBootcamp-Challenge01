const Project = require('../models/Project')
const Counter = require('../models/Counter')

async function checkProjectIdExists (req, res, next){

    const { id } = req.params
    
    const project = await Project.findOne({id})

    if(!project){

        return res.status(400).json({"message": "Error. Project not found"})

    }

    
    req.locals = { project }

    return next()

}



function countReqs (req, res, next) {

    Counter.find().then(isFirst => {
        if(!isFirst.length){

            Counter.create({ 'counter' : 1 }).then(() => {
            
                console.log(`The API have been called 1 time`)
                return next()
            })
        
        }
        
        Counter.findOneAndUpdate(
            { },{ $inc: { counter : +1 } }, { new : true }
        ).then( counter => {
            console.log(`The API have been called ${counter.counter} times`)
            return next()
        })

    })

}

module.exports = { checkProjectIdExists, countReqs }
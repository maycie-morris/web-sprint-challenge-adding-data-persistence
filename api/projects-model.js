const db = require('../data/db-config')

const find = () =>{
    return db('projects')
}

const findById = (id) =>{
    return db('projects')
        .where({ id })
}

const insert = (projectData) =>{
    return db('projects')
        .insert(projectData)
}


module.exports = {
    find,
    findById,
    insert
}
const db = require('../data/db-config')


const find = () => {
    return db('tasks as t')
    .select(
        't.id',
        't.task_description',
        't.notes',
        't.task_completed',
        'p.project_name',
        'p.project_description',
        )
    .join('projects as p', 'p.id', 't.projects_id');
};

const findById = (id) =>{
    return db('resources')
        .where({ id })
};

const insert = task => {
    return db('tasks').insert(task);
};

module.exports = {
  find,
  findById,
  insert
};
const db = require('../data/db-config');

const find = () => {
  return db('resources');
};

const findById = (id) =>{
    return db('resources')
        .where({ id })
}

const insert = data => {
  return db('resources')
    .insert(data, 'id')
    .then(dataId => {
      const [id] = dataId;

      return db('resources')
        .where({ id })
        .first()
        .then(resource => {
          return resource;
        });
    });
};

module.exports = {
  find,
  findById,
  insert
};
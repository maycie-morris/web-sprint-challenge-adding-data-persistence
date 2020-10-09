exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {id: 1, resource_name: 'Food', resource_description: 'I love food'},
          {id: 2, resource_name: 'PC', resource_description: 'Cant live without my desktop'},
          {id: 3, resource_name: 'Cat', resource_description: 'Oskar is annoying but I love him'}
        ]);
      });
  };
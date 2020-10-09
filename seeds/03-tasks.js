exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, task_description: 'Make food', task_completed: false, notes: 'Yum yum', projects_id: 1},
        {id: 2, task_description: 'Feed the baby', task_completed: false, notes: 'Probably get stuck with him asleep on me after', projects_id: 2},
        {id: 3, task_description: 'Laundry', task_completed: true, notes:"It really never ends :(", projects_id: 3}
      ]);
    });
};
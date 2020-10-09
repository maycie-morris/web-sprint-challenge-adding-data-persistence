
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id');
        tbl.string('project_name', 128).notNullable().unique()
        tbl.text('project_description')
        tbl.boolean('project_completed').notNullable().defaultTo(false)
    })
      .createTable('resources', tbl => {
          tbl.increments('id')
          tbl.string('resource_name', 128).notNullable().unique()
          tbl.text('resource_description')
      })
      .createTable('tasks', tbl => {
          tbl.increments('id')
          tbl.text('task_description').notNullable()
          tbl.boolean('task_completed').notNullable().defaultTo(false)
          tbl.text('notes')
          tbl.integer('projects_id').notNullable().unsigned().references('id').inTable('projects').onUpdate('CASCADE')
      })
      .createTable('projects_resources', tbl => {
          tbl.integer('projects_id').notNullable().unsigned().references('id').inTable('projects').onUpdate('CASCADE')
          tbl.integer('resources_id').notNullable().unsigned().references('id').inTable('resources').onUpdate('CASCADE')
          tbl.primary(['projects_id', 'resources_id'])
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };

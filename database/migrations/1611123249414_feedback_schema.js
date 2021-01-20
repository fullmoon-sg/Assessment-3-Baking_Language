'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.increments()
      table.string('Category',100).notNullable();
      table.string('Desciption',500).notNullable();
      table.integer('Ratings').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('feedbacks')
  }
}

module.exports = FeedbackSchema

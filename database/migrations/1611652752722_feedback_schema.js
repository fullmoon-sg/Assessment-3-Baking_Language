'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.increments()
      table.string('category',100).notNullable();
      table.string('comments',500).notNullable();
      table.integer('ratings').notNullable();

      table.integer('customer_id').unsigned().notNullable();
      table.foreign('customer_id').references('customers.id');

      table.integer('product_id').unsigned().notNullable();
      table.foreign('product_id').references('products.id');

      table.timestamps()
    })
  }

  down () {
    this.drop('feedbacks')
  }
}

module.exports = FeedbackSchema

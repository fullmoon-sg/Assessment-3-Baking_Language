'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('total_cost').notNullable();
      table.integer('quantity').notNullable();

      table.integer('customer_id').unsigned().notNullable();
      table.foreign('customer_id').references('customers.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema

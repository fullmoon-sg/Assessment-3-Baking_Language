'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.datetime('order_date').notNullable();
      table.integer('total_cost').notNullable();
      table.integer('quantity').notNullable();

      table.integer('payment_id').unsigned().notNullable();
      table.foreign('payment_id').references('payments.id');

      table.integer('customer_id').unsigned().notNullable();
      table.foreign('customer_id').references('customers.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema

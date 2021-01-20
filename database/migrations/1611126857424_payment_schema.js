'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentSchema extends Schema {
  up () {
    this.create('payments', (table) => {
      table.increments()
      table.datetime('payment_date').notNullable();
      table.integer('total_cost').defaultTo(0).notNullable();

      table.integer('customer_id').unsigned().notNullable();
      table.foreign('customer_id').references('customers.id')

      table.timestamps()
    })
  }

  down () {
    this.drop('payments')
  }
}

module.exports = PaymentSchema

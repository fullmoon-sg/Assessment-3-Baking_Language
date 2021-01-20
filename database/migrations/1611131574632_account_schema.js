'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('username',20).notNullable();
      table.string('email', 50).nullable();
      table.string('password',20).notNullable();

      table.integer('customer_id').unsigned().notNullable();
      table.foreign('customer_id').references('customers.id');
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountSchema

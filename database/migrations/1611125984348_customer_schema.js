'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.string('firstname',100).notNullable();
      table.string('lastname',100).notNullable();
      table.string('gender',10).nullable();
      table.string('email',50).notNullable();
      table.integer('mobile_number');
      table.string('address',100).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema

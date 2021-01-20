'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('Category',100).notNullable();
      table.string('Description',500).notNullable();
      table.integer('Price').defaultTo(0).notNullable();
      table.string('Image').nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('category', 100).notNullable();
      table.string('description', 500).notNullable();
      table.float('price').defaultTo(0).notNullable();
      table.string('image_url', 254).nullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema

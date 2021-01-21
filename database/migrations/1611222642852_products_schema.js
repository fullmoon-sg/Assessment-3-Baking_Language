'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.table('products', (table) => {
      // alter table
      table.string('image_url',254)
    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
      table.dropColumn('image_url')
    })
  }
}

module.exports = ProductsSchema

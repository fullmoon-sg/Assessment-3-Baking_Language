'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

  Customer(){
    return this.belongsTo('App/Models/Customer')
  }

  Payment(){
    return this.belongsTo('App/Models/Payment')
  }

  Product(){
    return this.belongsToMany('App/Models/Product')
  }
}

module.exports = Order

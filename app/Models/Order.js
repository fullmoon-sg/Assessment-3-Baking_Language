'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

  customer(){
    return this.belongsTo('App/Models/Customer')
  }

  products(){
    return this.belongsToMany('App/Models/Product')
  }

}

module.exports = Order

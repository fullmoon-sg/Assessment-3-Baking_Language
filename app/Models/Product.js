'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  feedback() {
      return this.belongsTo('App/Models/Feedback')
    }

    orders(){
      return this.belongsToMany('App/Model/Order')
    }

}

module.exports = Product

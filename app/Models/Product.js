'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {

  Feedback() {
      return this.belongsTo('App/Models/Feedback')
    }

    Order(){
      return this.belongsToMany('App/Model/Vet')
    }

}

module.exports = Product

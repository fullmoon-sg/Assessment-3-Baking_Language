'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Feedback extends Model {
  customer(){
    return this.belongsTo('App/Models/Customer')
  }

   product(){
    return this.belongsToMany('App/Models/Product')
  }

}

module.exports = Feedback

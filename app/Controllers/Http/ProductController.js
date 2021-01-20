'use strict'

const Product = use('App/Models/Product')

class ProductController {

  async index({view}){
    let products = await Product.all();
    return view.render('products/show', {
      products: products.toJSON()
    })
  }
}

module.exports = ProductController

'use strict'

const Product = use('App/Models/Product')
const Config = use('Config')

class ProductController {

  async index({view}){
    let products = await Product.all();
    return view.render('products/index', {
      products: products.toJSON()
    })
  }

  create({view}){
    return view.render('products/create', {
      cloudinaryName: Config.get('cloudinary.name'),
      cloudinaryPreset : Config.get('cloudinary.preset'),
      cloudinaryApiKey: Config.get('cloudinary.api_key'),
      signUrl: route('cloudinary_sign')
    })
  }

  async processCreate({request,response}){
    let body = request.post();
    let product = new Product();
    product.category = body.category;
    product.description = body.description;
    product.price = body.price;
    await product.save();
    return response.redirect('/products')
  }

}

module.exports = ProductController

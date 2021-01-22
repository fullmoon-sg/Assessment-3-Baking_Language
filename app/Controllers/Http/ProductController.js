'use strict'

const Product = use('App/Models/Product')
const Config = use('Config')

class ProductController {

  async index({view}){
    let products = await Product.all();
    for(let p of products.toJSON())
    {
      console.log(p.image_url);
    }
    return view.render('products/index', {
      products: products.toJSON()
    })
  }

  create({view}){
    return view.render('products/create', {
      cloudinaryName: Config.get('cloudinary.name'),
      cloudinaryPreset : Config.get('cloudinary.preset'),
      cloudinaryApiKey: Config.get('cloudinary.api_key'),
      signUrl: '/cloudinary/sign'
    })
  }

  async processCreate({request,response}){
    let body = request.post();
    let product = new Product();
    product.category = body.category;
    product.description = body.description;
    product.price = body.price;
    product.image_url = body.image_url;
    await product.save();
    return response.redirect('/products')
  }

  async update({view,params}){
    let product = await Product.find(params.product_id);
    return view.render('products/update', {
      product : product.toJSON();
    })
  }

}

module.exports = ProductController

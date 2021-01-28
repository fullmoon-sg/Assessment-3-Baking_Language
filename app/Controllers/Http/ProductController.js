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

  async index_api({response}){
    let products = await Product.all();
    response.json(products)
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
      product : product.toJSON()
    })
  }

  async processUpdate({request,response,params}){
    let product = await Product.find(params.product_id);
    let updateData = request.post();
    product.category = updateData.category;
    product.description = updateData.description;
    product.price = updateData.price;
    product.image_url = updateData.image_url;
    product.save();
    response.route('/products')
  }

  async delete({view,params}){
    let product = await Product.find(params.product_id);
    return view.render('products/delete',{
      product : product.toJSON()
    })
  }

  async processDelete({params,response}){
    let product = await Product.find(params.product_id);
    await product.delete();
    response.route('/products')
  }
}

module.exports = ProductController

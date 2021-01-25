'use strict'

const Product = use('App/Models/Product')
const Order = use('App/Models/Order')
const Config = use('Config')

class OrderController {

  async addToOrder({params,session}){
 let order = await Order.all();
 let product = await Product.find(params.product_id);
 order[product.id] = {
   ...product,
   quantity: 1
 }
}

async index({view}){
  let orders = await Order.all();
  return view.render('orders/index', {
    orders : orders.toJSON()
  }
  )
}

}
module.exports = OrderController

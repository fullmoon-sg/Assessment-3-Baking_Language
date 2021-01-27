'use strict'

const Product = use('App/Models/Product')
const Order = use('App/Models/Order')
const Config = use('Config')

class OrderController {

async addToOrder({params,request,auth,response}){
 let product = await Product.find(params.product_id);
 let order = new Order();
 order.quantity = 1;
 order.total_cost = 450;
 order.customer_id = auth.user.customer_id;
 await order.save();
 return response.redirect('display_all_orders')
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

'use strict'

const Product = use('App/Models/Product')
const Order = use('App/Models/Order')
const Config = use('Config')

class OrderController {


async addToOrder({params,auth,response}){
 let product = await Product.find(params.product_id);
 let order = new Order();
 if(order.hasOwnProperty(product.id)){
   order.quantity += parseInt(1)
 }else{
 order.quantity = parseInt(1);
 }
 order.total_cost = order.quantity * product.price;
 order.customer_id = auth.user.customer_id;
 await order.save();
 await order.Products().attach([product.id]);
 return response.redirect('/products')
}

async index({view,params,response}){
  let order = await Order.query().with('Products').fetch();
  return view.render('orders/index', {
    order : order.toJSON()
  })
}

// delete({params,response}){
//  let product = await Product.find(params.product_id);
//   await order.delete();
//   response.route('display_all_orders')

// }

}
module.exports = OrderController

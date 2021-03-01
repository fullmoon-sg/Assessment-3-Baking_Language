'use strict'

const Product = use('App/Models/Product')
const Order = use('App/Models/Order')
const Config = use('Config')

class OrderController {

async addToOrder({params,auth,response,session}){
 let product = await Product.find(params.product_id);
 let order = new Order();
 order.quantity = parseInt(1);
 order.total_cost = order.quantity * product.price;
 order.customer_id = auth.user.customer_id;
 await order.save();
 await order.products().attach([product.id]);
 session.flash({ notification: `${product.description} has been added.`});
 return response.redirect('/products')
}

async index({view,params,response}){
  let order = await Order.query().with('products').fetch();
  return view.render('orders/index', {
    order : order.toJSON()
  })
}

async delete({params,response}){
let delete_order = await Order.find(params.product_id);
 await delete_order.products().detach()
 await delete_order.delete();
 response.route('/orders')


  // return view.render('orders/delete',{
  //   delete : delete_order.toJSON()
  // })
}
}
module.exports = OrderController

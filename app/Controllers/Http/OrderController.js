'use strict'

const Product = use('App/Models/Product')
const Order = use('App/Models/Order')
const Config = use('Config')

class OrderController {

  async addToOrder({params, session}){
  let order = session.get('order_key',{});
  let product = await Product.find(params.product_id);


  if(order.hasOwnProperty(product.id)){
     order[product.id].qty += 1;
     }else{

    order[product.id] = {
    ...product.toJSON(),
    qty : 1,
  }
  }
 session.put('order_key', order)
}

index({view,session}){
let order = session.get('order_key',{});
return view.render('order/index', {
  order : order
})
}

clear({session,response}){
    session.clear('order_key');
    response.route('display_all_products')
}

remove({session,response,params}){
  let order = session.get('order_key', {});
  if (order.hasOwnProperty(params.product_id)){
    delete order[params.product_id]
  }
  response.route('order')

}


}
module.exports = OrderController

'use strict'

const Feedback = use('App/Models/Feedback')
const Customer = use('App/Models/Customer')
const Product = use('App/Models/Product')
const Config = use('Config')

class FeedbackController {

  async index({view}){
    let feedbacks = await Feedback.all();
    return view.render('feedbacks/index',{
      feedbacks : feedbacks.toJSON()
    })
  }

 async create({view}){
   let customer = await Customer.all();
   let product = await Product.all();
   return view.render('feedbacks/create',{
     customer : customer.toJSON(),
     product : product.toJSON()
   })
 }

}

module.exports = FeedbackController

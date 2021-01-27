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
    return view.render('feedbacks/create')
  }

 async processFeedback({request,response,auth,params}){
  let body = request.post();
  let product = await Product.find(params.product_id);
   let feedback = new Feedback();
   console.log(body)
   console.log(product)
   feedback.category = body.category;
   feedback.comments = body.comments;
   feedback.ratings = body.ratings;
   feedback.customer_id = auth.user.customer_id;
  feedback.product_id = product.id;
   await feedback.save();
   return response.redirect('/feedbacks')
 }

}

module.exports = FeedbackController

'use strict'

const Feedback = use('App/Models/Feedback')
const Customer = use('App/Models/Customer')
const Product = use('App/Models/Product')
const Config = use('Config')

class FeedbackController {

  async index({view}){
    let products = await Product.all();
    let feedbacks = await Feedback.all();
    return view.render('feedbacks/index',{
      products : products.toJSON(),
      feedbacks : feedbacks.toJSON()
    })
  }

 async feedback_api({response}){
   let feedbacks = await Feedback.all();
   response.json(feedbacks)
 }

 create({view}){
    return view.render('feedbacks/create')
  }

 async processFeedback({request,response,auth,params}){
  let body = request.post();
  let product = await Product.find(params.product_id);
   let feedback = new Feedback();
   feedback.category = body.category;
   feedback.comments = body.comments;
   feedback.ratings = body.ratings;
   feedback.image = product.image_url
   feedback.customer_id = auth.user.customer_id;
   feedback.product_id = product.id;
   await feedback.save();
   return response.redirect('/feedbacks')
 }

}

module.exports = FeedbackController

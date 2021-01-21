'use strict'

const Customer = use('App/Models/Customer')

class CustomerController {

  async index({view}){
    let customers = await Customer.all();
   return view.render('customers/index', {
     customers: customers.toJSON()
   })
  }

  create({view}){
    return view.render('customers/create')
  }

  async processCreate({request,response}){
    let body = request.post();
    let customer = new Customer();
    customer.firstname = body.firstname;
    customer.lastname = body.lastname;
    customer.gender = body.gender;
    customer.email = body.email;
    customer.mobile_number = body.mobile_number;
    customer.address = body.address;
    await customer.save();
    return response.redirect('/customers')
  }
}
module.exports = CustomerController

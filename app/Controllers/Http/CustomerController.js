'use strict'

const Customer = use('App/Models/Customer')
const User = use('App/Models/User')

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

  async update({view,params}){
    let customer = await Customer.find(params.customer_id)
    return view.render('customers/update', {
      customer : customer.toJSON()
    })
  }

  async processUpdate({request,response,params}){
    let customer = await Customer.find(params.customer_id);
    let updateData = request.post();
    customer.firstname = updateData.firstname;
    customer.lastname = updateData.lastname;
    customer.gender = updateData.gender;
    customer.email = updateData.email;
    customer.mobile_number = updateData.mobile_number;
    customer.address = updateData.address;
    customer.save();
    response.route('/customers');
  }

  async delete({view,params}){
    let customer = await Customer.find(params.customer_id);
    return view.render('customers/delete',{
      customer : customer.toJSON()
    })
  }

  async processDelete({params,response}){
    let customerId = params.customer_id;
    await User.query().where('customer_id', customerId).delete();
    await delete_user.delete();
    let customer = await Customer.find(customerId);
    await customer.delete();
    response.route('/customers')
  }
}

module.exports = CustomerController

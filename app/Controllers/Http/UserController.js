'use strict'

const User = use('App/Models/User')
const Customer = use('App/Models/Customer')

class UserController {

  login({view}){
    return view.render('users/login')
  }

  async login({request,auth,response,session}){
    const {username,password} = request.all();

    try{
      await auth.attempt(username,password);
      return response.redirect('/products')

    }catch(error){
      session.flash({loginError : "These credentials are invalids."});
      return response.redirect('/users/login')
    }
  }

  signup({view}){
    return view.render('users/signup')
  }

  async processNewAccount({request,response}){
    let body = request.post();
    let customer = new Customer();
    let account = new User();
    customer.firstname = body.firstname;
    customer.lastname = body.lastname;
    customer.gender = body.gender;
    customer.email = body.email;
    customer.mobile_number = body.mobile_number;
    customer.address = body.address;
    account.username = body.username;
    account.email = body.email;
    account.password = body.password;
    await customer.save();
    account.customer_id = customer.id;
    await account.save()
    return response.redirect('../products/')
    }


}

module.exports = UserController

'use strict'

const Account = use('App/Models/Account')
const Customer = use('App/Models/Customer')

class AccountController {

  login({view}){
    return view.render('accounts/login')
  }

  create({view}){
    return view.render('accounts/create')
  }

  async processNewAccount({request,response}){
    let body = request.post();
    let customer = new Customer();
    let account = new Account();
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
    return response.redirect('login')

    }

}

module.exports = AccountController

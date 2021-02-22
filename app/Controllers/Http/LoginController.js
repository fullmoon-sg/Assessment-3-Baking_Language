'use strict'

const User = use('App/Models/User')
const Customer = use('App/Models/Customer')

class LoginController {

  async login({request, response, auth}){
    let data = request.post();
    let username = data.username;
    let password = data.password;
    console.log(username,password)
    let token = await auth.authenticator('api').attempt(username,password)
    console.log(token);
    return response.json(token)
  }

  async register({request,auth,response}){
    try {
      let data = request.post();
      let newUser = new User();
      let newCustomer = new Customer();
      newCustomer.firstname = data.firstname;
      newCustomer.lastname = data.lastname;
      newCustomer.gender = data.gender;
      newCustomer.email = data.email;
      newCustomer.mobile_number = data.mobile_number;
      newCustomer.address = data.address;
      newUser.username = data.username;
      newUser.email = data.email;
      newUser.password = data.password;
      await newCustomer.save();
      newUser.customer_id = newCustomer.id;
      await newUser.save();
      return response.json(newCustomer.toJSON(),newUser.toJSON())
    } catch (e) {
      console.log(e);
    }
  }

  async updateProfile({request,auth,response}){
    try{
      let user = await auth.authenticator('api').getUser();
      let updateData = request.post();
      customer.firstname = updateData.firstname;
    customer.lastname = updateData.lastname;
    customer.gender = updateData.gender;
    customer.email = updateData.email;
    customer.mobile_number = updateData.mobile_number;
    customer.address = updateData.address;
    customer.save();
    } catch(error)
    {
      response.send("Unable to update")
    }
  }

  async profile({response,auth}){
    try{
      let user = await auth.authenticator('api').getUser();
      let customer = await Customer.find(user.customer_id);
      response.json(customer);

    } catch (error){
      console.log(error);
      response.send(error)
    }
  }

  async protected({response,auth}){
    response.json("Protected route access")
  }

}


module.exports = LoginController

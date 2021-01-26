'use strict'

class CreateUser {
  get rules () {
    return {
      'firstname' : 'required',
      'lastname' : 'required',
      'email' : 'required|unique:users',
      'mobile_number' : 'required|unique:customers',
      'address' : 'required',
      'username' : 'required|unique:users',
      'password' : 'required'
    }
  }

  get messages(){
    return{
      'required' : 'The {{field}} cannot be empty.',
      'unique' : 'I am sorry, this {{field}} already exists.'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');

  }
}

module.exports = CreateUser

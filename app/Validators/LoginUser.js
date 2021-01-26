'use strict'

class LoginUser {
  get rules () {
    return {
      'username' : 'required',
      'password' : 'required'
    }
  }

  get messages(){
    return {
      'required' : 'Invalid command, {{field}} is required.',
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser

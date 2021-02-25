'use strict'

const Token = use("App/Models/Token")
const User = use("App/Models/User")
const Encryption = use('Encryption')

class LoginWithTokenController {

  async login({request, response, auth}){
    let rawToken = request.get()['token'];
    let plainToken = Encryption.decrypt(rawToken)

   console.log(rawToken,plainToken)
    let token = await Token.findBy('token', plainToken);
    if(token){
      let user = await User.find(token.user_id);
      await auth.login(user);
      // response.send("User has login successfully")
      response.route('checkout/checkout')
    } else {
      response.send("Invalid Token")
    }
  }

}

module.exports = LoginWithTokenController

'use strict'

const User = use('App/Models/User')


class CartController {

  async getCart({ request, response, auth }) {
    let user = await auth.authenticator('api').getUser();
    let cartContent = JSON.parse(user.cart_content);
    response.json(cartContent)
  }

  async updateCart({ request, response, auth }) {
      let user = await auth.authenticator('api').getUser();
      user.cart_content = JSON.stringify(request.post().cart_content);
      console.log(user.cart_content)
      await user.save();
      response.json(user.cart_content)
    }

}

module.exports = CartController

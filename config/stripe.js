'use strict'

const Env = use('Env')

module.exports = {
  publishable_key: Env.get('STRIPE_KEY_PUBLISHABLE'),
  secret_key: Env.get('STRIPE_KEY_SECRET'),
  success_url: 'https://8080-de3f3226-69d2-47aa-8bc2-2faf1e0a30b5.ws-us03.gitpod.io/api/checkout/success',
  error_url: Env.get('APP_URL') + "/checkout/error",
  endpoint_secret: Env.get('STRIPE_ENDPOINT_SECRET','')
}

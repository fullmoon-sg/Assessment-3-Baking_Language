'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('customers/', 'CustomerController.index').as('display_all_customers')
Route.get('customers/create', 'CustomerController.create')
Route.post('customers/create','CustomerController.processCreate')
Route.get('customers/:customer_id/update','CustomerController.update')
Route.post('customers/:customer_id/update','CustomerController.processUpdate')
Route.get('customers/:customer_id/delete', 'CustomerController.delete').as('delete_customer')
Route.post('customers/:customer_id/delete', 'CustomerController.processDelete')

Route.get('products/','ProductController.index').as('display_all_products')
Route.get('products-api/','ProductController.index_api')
Route.get('products/create','ProductController.create').as('create_product')
Route.post('products/create', 'ProductController.processCreate')
Route.get('products/:product_id/update', 'ProductController.update').as('update_product')
Route.post('products/:product_id/update', 'ProductController.processUpdate')
Route.get('products/:product_id/delete','ProductController.delete').as('delete_product')
Route.post('products/:product_id/delete','ProductController.processDelete')

Route.get('cloudinary/sign','CloudinaryController.sign').as('cloudinary_sign')

Route.get('orders/','OrderController.index').as('display_all_orders')
Route.get('orders/:product_id/create','OrderController.addToOrder').as('add_to_order')
Route.get('orders/:product_id/delete', 'OrderController.delete').as('remove_from_order')
// Route.post('orders/:product/delete', 'OrderController.delete').as('remove_from_order')


Route.get('feedbacks-api/', 'FeedbackController.feedback_api')
Route.get('feedbacks/', 'FeedbackController.index').as('display_all_feedbacks')
Route.get('feedbacks/:product_id/create', 'FeedbackController.create').as('add_feedback')
Route.post('feedbacks/:product_id/create','FeedbackController.processFeedback');


Route.on('users/login').render('users.login').as('logging');
Route.post('users/login', 'UserController.login').validator('LoginUser').as('logging_page')

Route.get('users/signup', 'UserController.signup').as('create_new_signup')
Route.post('users/signup','UserController.processNewAccount').validator('CreateUser')

Route.post('api/user', 'LoginController.register');
Route.post('api/user/login','LoginController.login');
Route.post('api/user/updateProfile', 'LoginController.updateProfile')
Route.get('api/user/profile', 'LoginController.profile')
Route.get('api/user/protected', '/LoginController.protected').middleware(['auth:api'])

Route.get('api/cart','CartController.getCart').middleware(['auth:api']);
Route.put('api/cart','CartController.updateCart').middleware(['auth:api']);

Route.get('api/loginWithToken','LoginWithTokenController.login');

Route.get('api/checkout/checkout','CheckOutController.checkout').as('checkout');
Route.post('checkout/process','CheckOutController.processPayment')

Route.get('/logout', async({auth,response}) => {
  await auth.logout();
  return response.redirect('/products')
})


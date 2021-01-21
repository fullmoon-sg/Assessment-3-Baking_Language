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

Route.get('customers/', 'CustomerController.index')
Route.get('customers/create', 'CustomerController.create')
Route.post('customers/create','CustomerController.processCreate')
Route.get('customers/:customer_id/update','CustomerController.update')
Route.post('customers/:customer_id/update','CustomerController.processUpdate')
Route.get('customers/:customer_id/delete', 'CustomerController.delete')
Route.post('customers/:customer_id/delete', 'CustomerController.processDelete')

Route.get('products/','ProductController.index')
Route.get('products/create','ProductController.create')
Route.post('products/create', 'ProductController.processCreate')


Route.get('cloudinary/sign','CloudinaryController.sign').as('cloudinary_sign')

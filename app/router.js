import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('register', function() {
    this.route('shop-info');
  });

  this.route('app', function() {
    this.route('shops', {path: '/'}, function() {
      this.route('menu', { path: '/shop/:shop_id/menu' });
    });

    // this.route('checkout-page', { path: '/orders/:order_id' });

    this.route('order-confirmation', { path: '/orders/:order_id' },  function(){
      this.route('get-directions');
      this.route('parking');
    });
  });

  this.route('coffee-shop-account', {path: '/admin'}, function() {
    this.route('account', function() {
      this.route('edit');
      this.route('parking');
    });
    this.route('menu', function() {
      this.route('edit', {path: '/:id'});
      this.route('add');
    });
    this.route('incoming-orders');
  });
});

export default Router;

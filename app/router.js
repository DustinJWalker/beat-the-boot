import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route(`index`, {path: `/` }, function() {

  });
  this.route('register', function() {
    this.route('shop-info');
  });

  this.route('login');
  this.route('add-menu');
  this.route('menu-items');
  this.route('app', function() {
    this.route('shops', function() {
      this.route('menu', { path: '/:shop_id/menu' });
    });

    this.route('checkout-page', { path: '/:order_id' });

    this.route('order-confirmation', { path: '/order-confirmation/:order_id' },  function(){
      this.route('get-directions');
    });
  });

  this.route('coffee-shop-account', function() {
    this.route('account', function() {
      this.route('edit');
    });
    this.route('menu', function() {
      this.route('edit', {path: '/:id'});
      this.route('add');
    });
    this.route('incoming-orders');
  });
});

export default Router;

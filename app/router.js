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
  this.route('home-page');
  this.route('checkout-page');
  this.route('order-confirmation', function(){
    this.route('get-directions');
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

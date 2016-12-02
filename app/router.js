import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route(`index`, {path: `/` }, function() {

  });
  this.route('register-user');
  this.route('login');

  this.route('register-shop');
  this.route('add-menu');
  this.route('menu-items');
  this.route('home-page');
  this.route('checkout-page', function() {
    this.route('confirmation');
  });
});

export default Router;

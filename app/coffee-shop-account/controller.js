import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  tabs: [
    {
      name: 'Account',
      route: 'coffee-shop-account.account.index',
      icon: 'fa fa-user'
    },
    {
      name: 'Menu',
      route: 'coffee-shop-account.menu.index',
      icon: 'fa fa-cutlery'
    },
    {
      name: 'Incoming orders',
      route: 'coffee-shop-account.incoming-orders',
      icon: 'fa fa-tasks'
    },
  ],
});

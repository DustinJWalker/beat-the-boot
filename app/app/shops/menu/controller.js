import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  cart: [],

  init() {
    this._super(...arguments);

    this.set('cart', []);
  },

  checkout: task(function * (lineItem) {
    if(this.cart.length === 0) {
      return this.get('flashMessages').danger('Cart is empty', { timeout: 2000})
    }
    // Make a new order and save it and wait
    const order = this.store.createRecord('order', {
      shop: this.model,
    });

    yield order.save();

    // Make a new line item for each item in the "cart" and attach them to the order and save
    yield this.cart.map(({ quantity, drink }) => {
      return this.store.createRecord('line-item', { order, quantity, drink })
        .save();
    });

    this.transitionToRoute('app.order-confirmation', order);

    // Then Transition to confirm page?
  }),

  actions: {

    addToCart({ quantity, drink }) {
      this.set('cart', [{quantity, drink}, ...this.cart]);
      this.get('flashMessages').success('Item Added to Cart!', { timeout: 2000});
    }
  }
});

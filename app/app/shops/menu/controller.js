import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  cart: [],

  init() {
    this._super(...arguments);

    this.set('cart', []);
  },

  actions: {
    addDrink(formValues) {
      const drink = this.store.createRecord('drink', formValues);
      drink.set('quantity', this.quantity);
      drink.save().then(() => {
        this.transitionToRoute('checkout-page');
      }).catch(() => {
        alert('Error creating menu item');
      });
    },
    selectQty(quantity) {
      this.set('quantity', quantity);
    },

    addToCart({ quantity, drink }) {
      this.set('cart', [{quantity, drink}, ...this.cart]);
      this.get('flashMessages').success('Item Added to Cart!', { timeout: 2000});
    }
  }
});

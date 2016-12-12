import Ember from 'ember';

export default Ember.Component.extend({
  quantities: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],
  actions: {
    addToCart() {
      const addToCart = this.get('onAddToCart');

      addToCart({ quantity: this.quantitySelected, drink: this.drink });
    }
  }
});

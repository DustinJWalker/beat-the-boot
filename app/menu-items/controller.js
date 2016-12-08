import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  quantities: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],

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
    selectQuantity(size) {
      this.set('size', size);
    }
  }



});

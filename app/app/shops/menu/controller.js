import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  // init() {
  //   this._super(...arguments);
  //   this.get('flashMessages').success('HEY', {  timeout: 3000000000000 })
  // },

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
    selectQty(quantity) {
      this.set('quantity', quantity);
    },

    addToCart() {
      // Ember.get(this, 'model')
      //   .save()
      //   .then((res) => {
          this.get('flashMessages').success('Item Added to Cart!', { timeout: 2000});
          // doSomething(res);
        // })
        // .catch((err) => {
        //   this.get('flashMessages').danger('Something went wrong!');
        //   handleError(err);
        // });
    }
  }
});

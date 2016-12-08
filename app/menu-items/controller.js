import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  quantities: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],

  actions: {
  foo() {
    const flashMessages = Ember.get(this, 'flashMessages').add({
      message: 'Item(s) added to cart',
      timeout: 500,
      priority: 200,
      sticky: true,
      showProgress: true,
      extendedTimeout: 500,
      destroyOnClick: false
    });

    Ember.get(this, 'model')
      .save()
      .then((res) => {
        flashMessages.success('Successfully saved!');
        doSomething(res);
      })
      .catch((err) => {
        flashMessages.danger('Something went wrong!');
        handleError(err);
      });
  }
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
    }
  }



});

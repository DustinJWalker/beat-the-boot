import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveDrink(formValues) {
      // create a new user model
      const drink = this.store.createRecord('drink', formValues);
      // save the new user model
      drink.save()
        .then(() => {
          this.transitionToRoute('coffee-shop-account.menu');
        })
        .catch((e) => {
          alert('Error Creating Shop');
        });
    }
  }
});

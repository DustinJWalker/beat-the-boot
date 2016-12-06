import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveShop(formValues) {
      // create a new user model
      const shop = this.store.createRecord('shop', formValues);
      // save the new user model
      shop.save()
        .then(() => {
          this.transitionToRoute('home-page');
        })
        .catch(() => {
          alert('Error Creating Shop');
        });
    }
  }

});

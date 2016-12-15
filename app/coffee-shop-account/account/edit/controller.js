import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),

  actions: {
    saveUser(formValues) {
      this.get('currentUser.user.shop').then((shop) => {
        shop.setProperties(formValues);

        shop.save().then(() => {
          this.transitionToRoute('coffee-shop-account.account');
        }).catch((e) => {
          alert('Error Creating User');
        });
      });
    }
  }
});

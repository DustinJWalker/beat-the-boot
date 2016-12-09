import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveDrink(formValues) {
      this.model.setProperties(formValues);

      this.model.save().then(() => {
        this.transitionToRoute('coffee-shop-account.menu ');
      });
    },

    deleteDrink() {
      this.model.destroyRecord().then(() => {
        this.transitionToRoute('coffee-shop-account.menu');
      });
    }
  },
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transitionToRoute('coffee-shop-account.menu', this.get('model.shop.id'));
        });
      },
    },
  });

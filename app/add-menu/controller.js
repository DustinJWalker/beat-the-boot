import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  sizes: [
    'small', 'medium', 'large'
  ],

  actions: {
    addItem(formValues) {
      const drink = this.store.createRecord('drink', formValues);
      drink.set('size', this.size);
      drink.save().then(() => {
        this.transitionToRoute('menu-items');
      }).catch(() => {
        alert('Error creating menu item');
      });
    },
    chooseSize(size) {
      this.set('size', size);
    }
  }
});

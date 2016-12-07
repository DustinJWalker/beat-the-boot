import Ember from 'ember';

export default Ember.Controller.extend({

  sizes: [
    'small', 'medium', 'large'
  ],

  actions: {
    addItem(formValues) {
      const item = this.store.createRecord('item', formValues);
      item.set('size', this.size);
      item.save().then(() => {
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

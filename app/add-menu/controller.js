import Ember from 'ember';

export default Ember.Controller.extend({

  sizes: ['small', 'medium', 'large'],

  actions: {
    addItem() {

    },
    chooseSize(sizes) {
      console.log(sizes)
      this.set(sizes);
    }
  }
});

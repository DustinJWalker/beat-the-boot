import Ember from 'ember';

export default Ember.Controller.extend({

  sizes: ['small', 'medium', 'large'],

  actions: {
    chooseSize(sizes) {
      this.set(sizes);
    }
  }
});

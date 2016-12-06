import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveUser(formValues) {
      this.model.setProperties(formValues);

      this.model.save().then(() => {
        this.transitionToRoute('home-page');
      }).catch(() => {
      alert('Error Creating User');
    });
  }}
});

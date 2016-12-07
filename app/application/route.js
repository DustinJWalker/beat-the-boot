import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),

  beforeModel() {
    return this.get('currentUser').loadCurrentUser();
  }
});

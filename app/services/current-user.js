import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  user: null,

  loadCurrentUser() {
    // only load the current user if the session is logged in
    if (this.get('session').isAuthenticated) {
      // return current promise for loading current user
      this.get('store').queryRecord('user', {
        current: true,
      }).then((user) => {
        // set the user value for the user in our app
        this.set('user', user);
      });

    }
  }

});

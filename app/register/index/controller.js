import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveUser(formValues) {
      // create a new user model
      const user = this.store.createRecord('user', formValues);
      // save the new user model
      user.save()
      .then(() => {
        const secretStuff = {
          identification: formValues.email,
          password: formValues.password,
        };
        const authenticator = 'authenticator:jwt';

        // login user
        return this.get('session').authenticate(authenticator, secretStuff);
      }).then(() => {
        this.transitionToRoute('home-page');
      })
      .catch(() => {
        alert('Error Creating User');
      });
    }
  }
});

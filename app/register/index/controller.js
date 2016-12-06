import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  shopOwnerOptions: [
    {
      text: 'Shop Owner',
      value: true,
    },
    {
      text: 'Coffee Drinker',
      value: false,
    }
  ],

  actions: {
    editShopOwner(object, { value }) {
      console.log(value);
      Ember.set(object, 'isShopOwner', value);
    },
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
        return this.get('session')
          .authenticate(authenticator, secretStuff);
      }).then(() => {
        if (user.get('isShopOwner')) {
          this.transitionToRoute('register.shop-info');
        } else {
          this.transitionToRoute('home-page');
        }
      })
      .catch(() => {
        alert('Error Creating User');
      });
    }
  }
});

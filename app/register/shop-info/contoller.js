import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  actions: {
    saveShop(formValues) {
      // create a new user model
      const shop = this.store.createRecord('shop', formValues);
      // save the new user model
      shop.save()
      .then(() => {
        const secretStuff = {
          identification: formValues.shopName,
          email: formValues.email,
          password: formValues.password,
          description: formValues.description,
          image: formValues.shopUrl,
          address: formValues.address,
          city: formValues.city,
          state: formValues.state,
          zip: formValues.zip,
          telephone: formValues.phoneNumber,
        };
        const authenticator = 'authenticator:token';

        // login user
        return this.get('session').authenticate(authenticator, secretStuff);
      }).then(() => {
        this.transitionToRoute('home-page');
      })
      .catch(() => {
        alert('Error Creating Shop');
      });
    }
  }

});

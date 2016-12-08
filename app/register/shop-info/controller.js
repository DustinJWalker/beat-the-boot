import Ember from 'ember';
import config from 'beat-the-boot/config/environment';
export default Ember.Controller.extend({
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),
  actions: {
    choosePic(formValues) {
      this.get('filesystem').prompt()
        .then((upload) => {
          formValues.set('uploadFile', upload[0]);
        })
    },
    saveShop(formValues) {
      // how to save if we are uploading an image
      if (formValues.uploadFile) {
        const token = this.get('session.session.content.authenticated.token');
        return this.get('filesystem').fetch(`${config.DS.host}/api/shops`, {
          method: 'POST',
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${token}`,
          },
          body: { ...formValues },
        }).then((res) => res.json())
        .then((data) => {
          this.store.pushPayload(data);
          this.transitionToRoute('coffee-shop-account.account');
        });
      }

      // create a new user model
      const shop = this.store.createRecord('shop', formValues);
      // save the new user model
      shop.save()
        .then(() => {
          this.transitionToRoute('coffee-shop-account.account');
        })
        .catch(() => {
          alert('Error Creating Shop');
        });
    }
  }
});

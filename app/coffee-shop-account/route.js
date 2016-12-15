import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service(),
  model() {
    return this.get('currentUser').loadCurrentUser();
  },

  afterModel(model) {
    if(!(model.get('isShopOwner') || model.get('shop'))) {
      this.transitionTo('app')
    }
  }
});

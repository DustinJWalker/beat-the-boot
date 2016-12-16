import DS from 'ember-data';
import config from 'beat-the-boot/config/environment';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  picture: DS.attr('string'),
  street: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  zip: DS.attr('string'),
  phone: DS.attr('string'),
  profilePicUrl: DS.attr('string'),
  user: DS.belongsTo('user'),

  drinks: DS.hasMany('drink'),
  orders: DS.hasMany('order'),

  parking: DS.attr({
    defaultValue() {
      return [];
    }
  }),

  fullProfilePicUrl: Ember.computed('profilePicUrl', function() {
    return `${config.DS.host}/uploads/${this.get('profilePicUrl')}`;
  }),

  address: Ember.computed('street', 'city', 'state', 'zip', function() {
    return `${this.get('street')} ${this.get('city')} ${this.get('state')}`;
  })
});

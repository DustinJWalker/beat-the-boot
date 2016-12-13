import DS from 'ember-data';

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
});

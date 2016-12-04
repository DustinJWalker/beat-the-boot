import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),
  isShopOwner: DS.attr('string'),
  isAdmin: DS.attr('boolean')
});

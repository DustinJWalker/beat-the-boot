import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  isShopOwner: DS.attr('boolean'),
  isAdmin: DS.attr('boolean'),
  shop: DS.belongsTo('shop'),
});

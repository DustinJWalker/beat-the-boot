import DS from 'ember-data';

export default DS.Model.extend({
  shop: DS.belongsTo('shop'),
  user: DS.belongsTo('user'),
  lineItems: DS.hasMany('line-item'),

  createdAt: DS.attr('string'),
});

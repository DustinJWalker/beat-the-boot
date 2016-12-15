import DS from 'ember-data';

export default DS.Model.extend({
  order: DS.belongsTo('order'),
  drink: DS.belongsTo('drink'),
  price: DS.attr('number'),
  quantity: DS.attr('number')
});

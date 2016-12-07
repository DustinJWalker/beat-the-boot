import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  name: DS.attr('string'),
  shop: DS.belongsTo('shop')
});

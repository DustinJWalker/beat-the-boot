import DS from 'ember-data';

export default DS.Model.extend({
  belongsTo: DS.attr('shop'),
  lineItems: DS.hasMany('line-item'),
  drink: DS.attr('string'),
  price: DS.attr('number')
});

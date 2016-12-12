import DS from 'ember-data';

export default DS.Model.extend({
  belongsTo: DS.attr('order'),
  price: DS.attr('float'),
  quantity: DS.attr('integer')
});

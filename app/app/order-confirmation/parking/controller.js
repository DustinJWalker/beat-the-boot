export default Ember.Controller.extend({
  lat: 36.1627,
  lng: -86.7816,
  zoom: 14,

  dangerZone: Ember.computed('model.shop.parking.points.@each.lat', 'model.shop.parking.points.@each.lng', function() {
    const parking = this.get('model.shop.parking.points') || [];

    return parking.map(r => ({lat: r.lat, lng: r.lng}));
  }),
});

export default Ember.Controller.extend({
  lat: 36.1627,
  lng: -86.7816,
  zoom: 14,

  dangerZone: Ember.computed('model.parking.points.@each.lat', 'model.parking.points.@each.lng', function() {
    const parking = this.get('model.parking.points') || [];

    return parking.map(r => ({lat: r.lat, lng: r.lng}));
  }),

  actions: {
     addParkingMarker(ev) {
      let location = ev.latlng;

      const parking = this.model.get('parking.points') || [];

      this.model.set('parking.points', [...parking, location]);

      this.model.save()
    },

    updateLocation(spot, ev) {
      let location = ev.target.getLatLng();

      this.model.set('parking.points', this.get('model.parking.points').map((s) => {
        if (s === spot) {
          return location;
        }

        return s;
      }));

      this.model.save();
    }
   }

 });

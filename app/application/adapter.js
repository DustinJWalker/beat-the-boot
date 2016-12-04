import DS from 'ember-data';
import config from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
//http://localhost333/api/BLAH
export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:jwt',

  host: config.DS.host,
  namespace: config.DS.namespace,

});

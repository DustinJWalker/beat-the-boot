import Ember from 'ember';

export function lowercase([str]/*, hash*/) {
  return str.toLowerCase();
}

export default Ember.Helper.helper(lowercase);

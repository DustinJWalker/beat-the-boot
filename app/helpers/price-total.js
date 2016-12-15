import Ember from 'ember';

export function priceTotal([lineItems]/*, hash*/) {
  if (lineItems && lineItems.reduce) {
    return lineItems.reduce((sum, lineItem) => {
      return sum + lineItem.get('drink.price') * lineItem.get('quantity');
    }, 0);
  }
}

export default Ember.Helper.helper(priceTotal);

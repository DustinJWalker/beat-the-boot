import { moduleForModel, test } from 'ember-qunit';

moduleForModel('drink', 'Unit | Model | drink', {
  // Specify the other units that are required for this test.
  needs: ['model:shop']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

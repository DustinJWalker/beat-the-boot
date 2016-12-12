import { moduleForModel, test } from 'ember-qunit';

moduleForModel('order', 'Unit | Model | order', {
  // Specify the other units that are required for this test.
  needs: ['model:line-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

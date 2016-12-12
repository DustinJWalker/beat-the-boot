import { moduleForModel, test } from 'ember-qunit';

moduleForModel('order:belongs-to:user', 'Unit | Model | order:belongs to:user', {
  // Specify the other units that are required for this test.
  needs: ['model:line-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | greeting-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GreetingCard />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GreetingCard>
        template block text
      </GreetingCard>
    `);

    assert.dom().hasText('template block text');
  });
});

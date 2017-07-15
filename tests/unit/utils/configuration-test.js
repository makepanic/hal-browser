import configuration from 'hal-browser/utils/configuration';
import { module, test } from 'qunit';

module('Unit | Utility | configuration');

// Replace this with your real tests.
test('it works', function(assert) {
  const element = document.createElement('div');
  element.setAttribute('data-hal-entrypoint', 'http://zombo.com')

  configuration.loadFromElement(element);
  assert.equal(configuration.entryPoint, 'http://zombo.com');
});

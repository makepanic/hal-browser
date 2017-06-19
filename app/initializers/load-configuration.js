import Configuration from '../utils/configuration';

export function initialize(/* application */) {
  Configuration.loadFromElement();
}

export default {
  name: 'load-configuration',
  initialize
};

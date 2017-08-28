import Ember from 'ember';
import Configuration from 'hal-browser/utils/configuration';

export default Ember.Controller.extend({
  queryParams: ['entryPoint', 'oauthServer'],

  entryPoint: Configuration.entryPoint,
  oauthServer: ''
});

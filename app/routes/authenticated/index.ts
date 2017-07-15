import Ember from 'ember';
import ENV from 'hal-browser/config/environment';
import Configuration from 'hal-browser/utils/configuration';

export default Ember.Route.extend({
  beforeModel(transition){
    if (transition.targetName === 'authenticated.index') {
      const url = transition.queryParams.defaultUrl ? transition.queryParams.defaultUrl : Configuration.entryPoint;
      return this.transitionTo('authenticated.inspect', url);
    }
  }
});
